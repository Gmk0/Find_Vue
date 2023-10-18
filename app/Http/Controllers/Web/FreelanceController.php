<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Freelance;
use Illuminate\Support\Facades\Request as RequestFacade;

class FreelanceController extends Controller
{
    //

    public function index()
    {

       // $this->subCategories = SubCategory::whereIn('id', $this->freelance->sub_categorie)->get();

        $freelances = Freelance::query();

        return Inertia::render('Web/Freelance/FindFreelance',[
            'filters'
            => RequestFacade::all('search', 'category', 'sub_category', 'price', 'level', 'disponible'),

            'freelances'=> $freelances
                ->with('category')
                ->with('user')
                ->orderBy('created_at', 'asc')
                ->filter(RequestFacade::only('search', 'category', 'sub_category', 'price', 'level', 'disponible'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($freelance) => [
                    'id' => $freelance->id,
                    'nom' => $freelance->nom,
                    'prenom' => $freelance->prenom,
                    'level' => $freelance->level,
                    'identifiant' => $freelance->identifiant,
                    'sub_categorie' => $freelance->subcategories(),
                    'like' => $freelance->isFavorite(),
                    //'' => $contact->deleted_at,
                    'user' => $freelance->user ? $freelance->user->only('name', 'profile_photo_url', 'profile_photo_path') : null,
                    'category' => $freelance->category ? $freelance->category->only('name', 'id') : null,
                ]),

            ]);
    }

    public function portefolio($portefolio)
    {


        $freelance = Freelance::where('identifiant', $portefolio)->first();

        if($freelance !=null)
        {
             return Inertia::render('Web/Freelance/Portefolio');

        }else{
            return redirect()->back();
        }

    }



}
