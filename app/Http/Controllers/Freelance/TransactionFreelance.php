<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionFreelance extends Controller
{
    //

    public function show()
    {
        return Inertia::render('Freelance/Transaction/TransactionListe');
    }

    public function showTransaction()
    {
        return Inertia::render('Freelance/Paiement/show');

    }

    public function RetraitArgent()
    {
        return Inertia::render('Freelance/Paiement/RetraitArgent');

    }

    public function showTransactionReleves()
    {
        return Inertia::render('Freelance/Paiement/Releves');
    }
}
