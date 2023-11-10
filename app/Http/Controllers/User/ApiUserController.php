<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\Notification;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class ApiUserController extends Controller
{
    //

    public function fetchLastUserMessage($id)
    {
        // Récupération des derniers messages de l'utilisateur depuis la base de données
        $messages = Message::where('receiver_id', $id)
            ->latest()
            ->take(2)
            ->get()
            ->map(function ($message) {
                return [
                    'id' => $message->id,
                    'body' => $message->body,
                    'senderUser'=>$message->senderUser,
                    'created_at'=>$message->created_at
                ];
            });

        // Vérification s'il y a des messages
        if ($messages->isNotEmpty()) {
            return response()->json(['messages' => $messages], 200);
        }

        // Aucun message trouvé, retourner un code de réussite 203 (No Content)
        return response()->json([], 203);
    }

    public function fetchLastCommande($id)
    {
        // Récupération des derniers messages de l'utilisateur depuis la base de données

        $totalCommande = Order::where('user_id', $id)->where('status', 'completed')->count();
        $totalEnAttente = Order::where('user_id', $id)->where('status','!=', 'completed')->count();

        $status=[
            'total'=> $totalCommande,
            'totalEnAttente'=> $totalEnAttente,
            ];
        // Vérification s'il y a des messages

            return response()->json(['status' => $status], 200);


        // Aucun message trouvé, retourner un code de réussite 203 (No Content)

    }

    public function fetchLastNotification()
    {
        $notifications = auth()->user()->unreadNotifications()->latest()->get();

        return response()->json(['notifications' => $notifications], 200);

    }

    public function removeNotification($id)
    {
        try{
            $notification = Notification::find($id);

            $notification->read_at = now();

            $notification->update();

            return response()->json(['success' => true], 200);


        }catch(\Exception $e){

            return response()->json(['success' => false], 500);
        }


    }

}
