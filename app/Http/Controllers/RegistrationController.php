<?php

namespace App\Http\Controllers;

use App\Models\Freelance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    //

    public function begin()
    {
        return Inertia::render('Web/Registration/Begin');
    }

    public function info()
    {
        return Inertia::render('Web/Registration/Info');
    }


    public function Registration()
    {
        return Inertia::render('Web/Registration/Registration',[
                'user' => [
                    'email' => auth()->user()->email,
                    'name' => auth()->user()->name,
                ],
            ]

        );
    }

    public function register(Request $request)
    {

        try{
            $data = $request->all();
            Freelance::create($data);

            return redirect(route('dashboard.freelance'));

        }catch(\Exception $e){

        }




        //return response()->json(['data' => $data]);
    }

    public function updateProfileUser(Request $request)
    {
        try {
            if ($request->hasFile('photo')) {

                $user = auth()->user();

                $photo = $request->file('photo');
                $path = $photo->store('photos', 'public');
                $user->profile_photo_path = $path;

                $user->save();
            }


           // return response()->json(['success' => true, 'message' => 'Profil mis à jour avec succès']);

        }catch (\Exception $e){

           //return response()->json(['success' => false, 'message' => 'Une erreur s\'est produite lors de la mise à jour du profil. Veuillez réessayer.']);

        }




    }

}
