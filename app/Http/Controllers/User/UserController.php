<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
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
        return Inertia::render('User/Commande/CommandeUser',['commandes'=>$commandes]);
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
