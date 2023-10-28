<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    //

    public function checkout()
    {
        return Inertia::render('Web/Checkout/Checkout');
    }
}
