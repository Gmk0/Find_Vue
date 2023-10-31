<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as OrderResources;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;

class CommandeController extends Controller
{
    //

    public function commandesList()
    {

        $commandes = auth()->user()->orders;
        //dd($commandes);

        return Inertia::render(
            'User/Commande/CommandeUser',
            ['commandes' => OrderResources::collection($commandes)]
        );
    }

    public function commandesOne($order_numero)
    {

        $commande = Order::where('order_numero', $order_numero)->first();

        return Inertia::render(
            'User/Commande/CommandeGestion',
            ['commande' => OrderResources::make($commande)]
        );
    }
}
