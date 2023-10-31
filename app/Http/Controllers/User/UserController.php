<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as ResourcesOrder;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{

    public function dashboard()
    {
        return Inertia::render('User/Dashboard/Dashboard');
    }
    public function commandesList()
    {

        $commandes= auth()->user()->orders;
        //dd($commandes);

        return Inertia::render('User/Commande/CommandeUser',
        ['commandes'=>ResourcesOrder::collection($commandes)]);
    }
    public function transactionsList()
    {
        return Inertia::render('User/Transaction/TransactionUser');
    }
    public function missionsList()
    {
        return Inertia::render('User/Mission/MissionUser');
    }








    //
}
