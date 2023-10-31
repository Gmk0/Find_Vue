<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $id = null)
    {
        //

         return Inertia::render('User/Chat/ChatComponent',
            [
                'chat' => fn () => $id ? Conversation::findOrFail($id) : null,
                'messages' => Message::latest()->where('sender_id', Auth::id())->get()
            ]

         );
    }
}
