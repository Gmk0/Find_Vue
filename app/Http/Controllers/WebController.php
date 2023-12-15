<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    //

    public function index(){



        $categories = Category::get()->map(function ($categories) {
            return [
                'id' => $categories->id,
                'name' => $categories->name,
                'media' =>[
                    'url' => $categories->getFirstMediaUrl('categories'),
                    'name' => $categories->name],
            ];
        });



        return Inertia::render('Web/Home', ['categories' => $categories]);
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

        $faqs=Faq::where('publier',true)->get();
        return Inertia::render('Web/Faq',['faqs'=>$faqs]);
    }

    public function feedBack()
    {
        return Inertia::render('Web/FeedBack');
    }
    public function sendFedback(Request $request)
    {

        $user=auth()->user()->UserSetting;



        //dd($request->user());

    }
}
