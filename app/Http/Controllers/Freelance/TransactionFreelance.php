<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResourceData;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionFreelance extends Controller
{
    //

    public function show()
    {

        $transactions = auth()->user()->transactions;

        return Inertia::render('Freelance/Transaction/TransactionListe',
        ['transactions' => TransactionResourceData::collection($transactions)]);
    }

    public function showTransaction($transaction_numero)
    {
        $transaction = auth()->user()->transactions->where('transaction_numero', $transaction_numero)->first();

        // dd($transaction);


        if(!$transaction)
        {
            return redirect()->back()->with(['error' => 'element indisponible']);
        }


        return Inertia::render('Freelance/Transaction/TransactionGestion',['transaction' => TransactionResourceData::make($transaction)]);

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
