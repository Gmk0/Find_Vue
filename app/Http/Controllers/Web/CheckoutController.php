<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
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
            foreach ($items as $key => $value) {

                $data = [
                    'service_id' =>$value['id'],
                    'user_id' => auth()->user()->id,
                    'total_amount' => $value['price'] * $value['quantity'],
                    'quantity' => $value['quantity'],
                    'type' => 'service',
                    'status' => 'pending',
                ];
                $datas[] =Order::create($data);
            }





            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => "Bon", 'brand' => "maxicash"];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();

            foreach ($datas as $order) {
                $orderToUpdate = Order::findOrFail($order->id);
                $orderToUpdate->status = "completed";
                $orderToUpdate->transaction_id = $payment->id;
                $orderToUpdate->update();
                // $orderToUpdate->notifyUser();
            }

            DB::commit();


        }catch(\Exception $e){
            DB::rollBack();

            dd($e->getMessage());

        }


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
