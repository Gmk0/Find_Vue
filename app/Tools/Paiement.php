<?php

namespace App\Tools;



use App\Models\Transaction;



class Paiement
{



    public function checkoutmaxi($prix, $telephone, $reference, $succesUrl, $canceUrl, $failureUrl)
    {

        $payType = "MaxiCash";
        $currency = "maxiDollar";
        $amount = $prix;
        $telephone = $telephone;
        $reference = $reference;

        // Construire les données de la requête
        $requestData = [
            'PayType' => $payType,
            'MerchantID' => env('MerchantID', "4930750f63334559967e9f7335b3862d"),
            'MerchantPassword' => env('MerchantPassword', "99d90bd5d1184f5096dabf62f6b59a07"),
            'Amount' => $amount,
            'Currency' => $currency,
            'Telephone' => $telephone,
            'Language' => 'fr',
            "Reference" => $reference,
            "SuccessURL" => $succesUrl,
            "FailureURL" =>  $failureUrl,
            "CancelURL" =>  $canceUrl,


            // Ajouter d'autres données de requête nécessaires
        ];





        // Envoyer la requête HTTP avec les données du formulaire
        // Construire les données de la requête


        // Construire l'URL de redirection avec les données du formulaire
        $url = 'https://api-testbed.maxicashapp.com/PayEntry?data=' . urlencode(json_encode($requestData));

        //
        return redirect($url);
    }
}
