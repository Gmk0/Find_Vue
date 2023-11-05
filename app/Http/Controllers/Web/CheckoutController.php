<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResourceData;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Tools\Paiement;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    //

    public function checkout()
    {
        return Inertia::render('Web/Checkout/Checkout');
    }


    public function checkoutMaxi(Request $request)
    {


        try{

            DB::beginTransaction();
            $form =$request->form;

            $total =$request->total;
            $items =$request->items;
            $datas=[];
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => "Bon", 'brand' => "maxicash"];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();

            foreach ($items as $key => $value) {

                $data = [
                    'service_id' =>$value['id'],
                    'user_id' => auth()->user()->id,
                    'total_amount' => $value['price'] * $value['quantity'],
                    'quantity' => $value['quantity'],
                    'type' => 'service',
                    'status' => 'pending',
                    'transaction_id' =>  $payment->id
                ];
                $datas[] =Order::create($data);
            }



            DB::commit();


            $succesUrl
            =route('checkoutStatusMaxiService'); ;
            $faileurUrl =
            route('checkoutStatusMaxiService');

            $cancelurl =
            route('checkoutStatusMaxiService');;
            $checkout = new Paiement();



            $url = $checkout->checkoutmaxi($total * 100, $form['numero'], $payment->payment_token, $succesUrl, $cancelurl, $faileurUrl);

               // dd($url);

            return Inertia::location($url);


        }catch(\Exception $e){
            DB::rollBack();

            dd($e->getMessage());

        }


    }

    public function paiment_maxi(Request $request)
    {


        $reference = $request->reference;
        $methode = $request->method;
        $status = $request->status;

        $transaction = Transaction::where('payment_token', $reference)->first();

        if($transaction==null)
        {

        }

        if($status=='failed')
        {
            $transaction->status = 'failed';
            $transaction->save();

            $oders= $transaction->orders;

            foreach($oders as $order)
            {
                $order->status='failed';
                $order->save();
            }

            return redirect()->route('panier')->with('error','une erreur s\'est produite');

        }else if($status == 'success'){

            $transaction->status = 'completed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->save();
            }

            return redirect()->route('paiementStatus',['transaction_numero' => $transaction->transaction_numero]);
        }else{
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return redirect()->route('panier')->with('error', 'une erreur s\'est produite');
        }



    }

    public function paiementStatus($transaction_numero)
    {

       // dd($transaction_numero);

       $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        return Inertia::render('Web/Checkout/Status',['transaction'=>TransactionResourceData::make($transaction)]);
    }

    function references()
    {
        // Générer une chaîne aléatoire unique de 16 caractères
        $randomString = uniqid();
        // Extraire les 8 premiers caractères de la chaîne aléatoire pour obtenir l'ID unique de 8 caractères
        $uniqueId = substr($randomString, 0, 8);
        // Compteur pour incrémenter la fin de l'ID unique
        $counter = DB::table('transactions')->count() + 1;
        // Concaténer le compteur à la fin de l'ID unique
        return  $finalId = 'TR' . $uniqueId . $counter;
    }

}
