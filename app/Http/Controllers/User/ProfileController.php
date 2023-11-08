<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ProfileController extends Controller
{
    //



    public function show(Request $request): InertiaResponse
    {


        return Inertia::render('User/Profile/Profile',[
            ]);

    }
}
