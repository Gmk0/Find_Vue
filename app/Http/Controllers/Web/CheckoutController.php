<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResourceData;
use App\Models\ClientLink;
use App\Models\Order;
use App\Models\Proposal;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Tools\Paiement;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class CheckoutController extends Controller
{
    //

    public function checkout()
    {
        $userSetting =auth()->user()->userSetting;
        return Inertia::render('Web/Checkout/Checkout',['userSetting' => $userSetting]);
    }


    public function checkoutMaxi(Request $request)
    {


        try{

            DB::beginTransaction();

            $userSeeting = auth()->user()->userSetting;

            $localisation = [
                'adresse' => $request->adresse,
                'commune' => $request->commune,
                'ville' => $request->ville,
                'pays' => $request->pays,
            ];
            $userSeeting->addresse_facturation = $localisation;
            $userSeeting->save();

            $form =$request->form;
            $total =$request->total;
            $items =$request->items;
            $datas=[];
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => "Maxi", 'brand' => "maxicash"];
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

           // dd($e->getMessage());

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
                $order->notifyUser();
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

    public function LinkCustomPaid($uniqueId)
    {

        // Recherchez le lien dans la base de données

        $clientLink = ClientLink::where('uniqueId', $uniqueId)->first();


        // Vérifiez si le lien correspond à un utilisateur authentifié
        if ($clientLink && Auth::check() && $clientLink->user_id === Auth::id()) {
            // Utilisateur authentifié, redirigez vers la page appropriée

            $proposal=Proposal::find($clientLink->proposal_id);



            if($proposal->transaction_id !=null)
            {
                //$clientLink->delete();

                session()->flash('error', 'Vous avez deja utiliser ce lien');
                return redirect()->back();
            }
            $service=$proposal->service;
            $userSetting = auth()->user()->userSetting;


            return Inertia::render('Web/Checkout/CheckoutCustom',
            ['userSetting' => $userSetting,
            'proposal' => $proposal,
            //'service' => $service,

            ]);


            //return view('other.paiement-custom', ['proposal' => $clientLink->proposal]);
        }

        // Lien invalide ou non autorisé pour cet utilisateur
        abort(403, 'Accès non autorisé');

    }
    public function checkoutMaxiCustom(Request $request)
    {


        try {

            $form = $request->form;
            DB::beginTransaction();

            $userSeeting = auth()->user()->userSetting;

            $localisation = [
                'adresse' => $form['adresse'],
                'commune' => $form['commune'],
                'ville' => $form['ville'],
                'pays' => $form['pays'],

            ];



            $userSeeting['addresse_facturation'] = $localisation;
            $userSeeting->update();





            $form = $request->form;
            $total = $request->total;
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => "Bon", 'brand' => "maxicash"];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();

            $order=Order::create([
                'service_id' => $request->service_id,
                'user_id' => auth()->user()->id,
                'total_amount' => $request->total,
                'quantity' => 1,
                'type' => 'service',
                'status' => 'pending',
                'transaction_id' =>  $payment->id,
                ]);

                $proposal=Proposal::find($request->proposal_id);
                $proposal->transaction_id=$payment->id;
                $proposal->save();
            DB::commit();


            $succesUrl
                = route('checkoutStatusMaxiServiceCustom');;
            $faileurUrl =
                route('checkoutStatusMaxiServiceCustom');

            $cancelurl =
                route('checkoutStatusMaxiServiceCustom');;
            $checkout = new Paiement();
            $url = $checkout->checkoutmaxi($total * 100, $form['numero'], $payment->payment_token, $succesUrl, $cancelurl, $faileurUrl);

            // dd($url);

            //dd($url->body());

            return Inertia::location($url);
        } catch (\Exception $e) {
            DB::rollBack();


            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }


    }

    public function paimentMaxiCustom(Request $request)
    {



        $reference = $request->reference;
        $methode = $request->method;
        $status = $request->status;

        $transaction = Transaction::where('payment_token', $reference)->first();

        if ($transaction == null) {
        }

        if ($status == 'failed') {
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;



            $link= $transaction->proposal->clientLink->uniqueId;


            //$lin=[];
            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return redirect()->route('customLink.paid', ['uniqueId' => $link])->with('error', 'une erreur s\'est produite');


        } else if ($status == 'success') {

            $transaction->status = 'completed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->notifyUser();
                $order->save();
            }

            return redirect()->route('paiementStatus', ['transaction_numero' => $transaction->transaction_numero]);
        } else {
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

}
