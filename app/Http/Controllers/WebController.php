<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    //

    public function index(){

        $category = Category::all();

        return Inertia::render('Web/Home', ['categories' => $category]);
    }
    public function about()
    {



        return Inertia::render('Web/About');
    }
    public function contact()
    {

        return Inertia::render('Web/Contact');
    }
    public function faq(){

        return Inertia::render('Web/Faq');
    }
}
