<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class parainageController extends Controller
{
    //

    public function getCodeUser(Request $request)
    {
        // Vous pouvez récupérer l'utilisateur actuellement authentifié ou
        // utiliser une logique spécifique pour récupérer l'utilisateur que vous souhaitez
        $user = $request->user();

        // Vérifiez si un utilisateur est authentifié
        if ($user) {
            // Renvoyer le code de parrainage de l'utilisateur au format JSON
            return response()->json(['referral_code' => $user->referral_code], 200);
        } else {
            // Renvoyer une réponse indiquant qu'aucun utilisateur n'est authentifié
            return response()->json(['message' => 'Aucun utilisateur n\'est authentifié.'], 401);
        }




    }

    public function generateCode(Request $request)
    {
        $user=auth()->user();

        if($user->referral_code !=null)
        {
            return response()->json(['message' => 'Vous possedez deja un code'], 401);

        }else{
            $generatedCode= $this->generateReferralCode($user->name);

            $user->referral_code = $generatedCode;
            $user->save();

            return response()->json(['referral_code' => $user->referral_code], 200);

        }
    }

    public function getAllUser()
    {
        // Vous pouvez récupérer l'utilisateur actuellement authentifié ou
        // utiliser une logique spécifique pour récupérer l'utilisateur que vous souhaitez
        $user = auth()->user();

        // Vérifiez si un utilisateur est authentifié
        if ($user->referrals !=null) {
            // Renvoyer le code de parrainage de l'utilisateur au format JSON
            return response()->json(['users' => $user->referrals], 200);
        } else {
            // Renvoyer une réponse indiquant qu'aucun utilisateur n'est authentifié
            return response()->json(['message' => 'Pas d\'utilisateur trouver.'], 401);
        }

    }

    private function generateReferralCode($name)
    {
        // Récupérez les trois premières lettres du nom
        $initials = Str::upper(Str::substr($name, 0, 3));

        // Ajoutez d'autres caractères si nécessaire pour garantir l'unicité
        $additionalChars = Str::upper(Str::random(5));

        // Combinez les initiales et les caractères supplémentaires
        $generatedCode = $initials . $additionalChars;

        return $generatedCode;
    }
}
