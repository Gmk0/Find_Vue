<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    //

    public function register($code = null)
    {

        return Inertia::render('Auth/Register',['code'=>$code]);
    }
}
