<?php

namespace App\Http\Controllers\User;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationResourceData;
use App\Models\Conversation;
use App\Models\Freelance;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Event;
use Illuminate\Http\Response;


class ChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $id = null)
    {
        //

        $conversations= Conversation::where('user_id', auth()->id())
            ->orderBy('last_time_message', 'DESC')->get();

            if($id !=null)
            {
            $conversation = Conversation::findOrFail($id);

            if ($conversation != null) {
                foreach ($conversation->messages as $message) {
                    $message->where('receiver_id', auth()->id())->update(['is_read' => true]);
                }
            }


            }





         return Inertia::render('User/Chat/ChatComponent',
            [
                'conversations' => ConversationResourceData::collection($conversations),
                'chat' => fn () => $id ? Conversation::findOrFail($id) : null,
                'messages' => Message::where('conversation_id', $id)->orderBy('created_at','asc')->get(),
                'user'=> fn () => $id ? Conversation::findOrFail($id)->freelance->user : null
            ]

         );
    }

    public function freelanceChat(string $id = null)
    {

        $conversations = Conversation::where('freelance_id', auth()->user()->freelance->id)
            ->orderBy('last_time_message', 'DESC')->get();

        if ($id != null) {
            $conversation = Conversation::findOrFail($id);

            if ($conversation != null) {
                foreach ($conversation->messages as $message) {
                    $message->where('receiver_id', auth()->id())->update(['is_read' => true]);
                }
            }
        }
           // dd($conversation);

        return Inertia::render(
            'Freelance/Chat/ChatComponent',
            [
                'conversations' => ConversationResourceData::collection($conversations),
                'chat' => fn () => $id ? Conversation::findOrFail($id) : null,
                'messages' => Message::where('conversation_id', $id)->orderBy('created_at', 'asc')->get(),
                'user' => fn () => $id ? Conversation::findOrFail($id)->user : null
            ]

        );

    }

    public function createChat(Request $request)
    {


        $freelance = Freelance::find($request->freelance_id);

        $conversation = Conversation::where('freelance_id', $freelance->id)
            ->whereHas('user', function ($query) {
                $query->where('id', auth()->id());
            })
            ->first();
        // Si une conversation est trouvée, afficher la vue de la conversation
        if ($conversation === null) {
            // return redirect()->route('MessageUser');
            $conversation = new Conversation();
            $conversation->freelance_id = $freelance->id;
            $conversation->user_id = auth()->id();
            $conversation->last_time_message = now();
            $conversation->status = 'pending';
            $conversation->save();

            return redirect()->route('user.chat',$conversation->id);


        }else{

            return redirect()->route('user.chat', $conversation->id);
        }
    }

    public function SendMessage(Request $request)
    {
        // Vérifie s'il y a des fichiers téléchargés
        if ($request->hasFile('files')) {
            $filePaths = [];

            // Parcours des fichiers téléchargés
            foreach ($request->file('files') as $file) {
                // Sauvegarde le fichier dans le dossier public/uploads (ou un autre dossier de votre choix)
               // $filePath = $file->store('uploads', 'public');
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('uploads', $fileName, 'public'); // Enregistrer le fichier dans le dossier 'storage/app/missions' avec le nom d'origine
                $filesPaths[] = $path;

                // Ajoute le chemin du fichier au tableau pour enregistrement en base de données
                //$filePaths[] = $filePath;
            }
        }

        try{
            $createdMessage = Message::create([
                'sender_id' => Auth::user()->id,
                'receiver_id' => $request->user,
                'conversation_id' => $request->chat,
                'body' => $request->message ?? null,
                'is_read' => false,
                'type' => "file",
                'file' => $filesPaths ?? null, // Enregistre les chemins des fichiers dans la base de données
            ]);

            $conversation = Conversation::find($request->chat);
             $conversation->last_time_message= now();
            $conversation->save();




            $this->dispatchMessageSent(auth()->user(), $createdMessage,$conversation, $request->user);


        }catch(\Exception $e){

            dd($e->getMessage());

        }

        // Enregistrement des chemins des fichiers dans la base de données

        // Autres actions après l'enregistrement du message avec les fichiers

        // Redirection ou réponse après le traitement
    }

    public function dispatchMessageSent($user, $message, $conversation, $receiverInstance)
    {
        broadcast(new MessageSent($user, $message, $conversation, $receiverInstance));


    }

}
