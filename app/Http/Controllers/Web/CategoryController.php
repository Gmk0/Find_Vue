<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Freelance;
use App\Models\Service;
use App\Models\SubCategory;
use Illuminate\Support\Facades\Request as RequestFacade;


class CategoryController extends Controller
{
    //

    public function index()
    {

        //$category= Category::query();
        return Inertia::render('Web/Category/index',[
            'categories' => Category::all(),
            ]);
    }

    public function categoryName($category)
    {


        $categoryGet = Category::where('name',$category)->first();

       if($categoryGet !=null)
       {

            $service= Service::query();
            $service->where('category_id', $categoryGet->id);

            return Inertia::render('Web/Category/CategoryName',
            [
                'filters' => RequestFacade::all('search', 'orderBy','sub_category', 'deliveryTime', 'price', 'level', 'tag'),
                'services'=>$service->
                with('freelance')
                //->with('freelance.user')
                //->orderBy('created_at', 'asc')
                ->filter(RequestFacade::only('search', 'sub_category', 'orderBy', 'price', 'level', 'deliveryTime', 'tag'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($service) => [
                    'id' => $service->id,
                    'title' => $service->title,
                    'basic_price' => $service->basic_price,
                    'service_numero' => $service->service_numero,
                    'image' => $service->files,
                    //'sub_categorie' => $service->subcategories(),
                    'like' => $service->isFavorite(),
                    'orderCount'=>$service->orderCount(),
                    'average' => $service->averageFeedback(),
                    'freelance' => $service->freelance ? $service->freelance->only('nom', 'prenom', 'identifiant','level') : null,
                    'user'=>$service->freelance->user ? $service->freelance->user->only('name', 'profile_photo_path', 'profile_photo_url') : null,
                    'category' => $service->category ? $service->category->only('name', 'id') : null,
                ]),

                'subcategories'=> SubCategory::where('category_id', $categoryGet->id)
                        // Cette ligne compte le nombre de services associés à chaque sous-catégorie
                        ->get()
                        ->map(function ($subcategory) {
                            return [
                                'id' => $subcategory->id,
                                'name' => $subcategory->name,
                                'illustration' => $subcategory->illustration,
                                'service_count' => count($subcategory->services()), // Récupérez le comptage des services
                            ];
                        }),
                'categories'=>Category::get()->map(function($category){
                    return[
                        'id'=>$category->id,
                        'name'=>$category->name,
                        'illustrator'=>$category->illustration,
                        'servcies_counts'=>$category->services->count(),
                        ];
                }),
                'category'=> $categoryGet,
                'tags'=>$service->pluck('tag')
                ->map(function ($tag) {
                    // Vérifiez si $tag est une chaîne avant de la décoder
                    return is_string($tag) ? json_decode($tag, true) : $tag;
                })
                ->flatten() // Pour obtenir une collection à une seule dimension
                ->unique()
                ->all()
                ]);
       }else{

        return redirect()->back();

       }


    }
    public function SubCategoryName($category,$subcategory)
    {

        $categoryExist = Category::where('name',$category)->exists();

        if(!$categoryExist){

            return redirect()->back();
        }

        $subcategoryElement = SubCategory::where('name', $subcategory)->first();

        if ($subcategoryElement != null) {

            $service = Service::query();
            $service->where('sub_category', 'like', '%' . $subcategoryElement->id . '%');



            return Inertia::render(
                'Web/Category/SubCategoryName',
                [
                    'filters' => RequestFacade::all('search', 'orderBy', 'deliveryTime', 'price', 'level', 'tag'),
                    'services' => $service->with('freelance')
                        //->with('freelance.user')
                        //->orderBy('created_at', 'asc')
                        ->filter(RequestFacade::only('search','orderBy', 'price', 'level', 'deliveryTime', 'tag'))
                        ->paginate(10)
                        ->withQueryString()
                        ->through(fn ($service) => [
                            'id' => $service->id,
                            'title' => $service->title,
                            'basic_price' => $service->basic_price,
                            'service_numero' => $service->service_numero,
                            'image' => $service->files,
                            //'sub_categorie' => $service->subcategories(),
                            'like' => $service->isFavorite(),
                            'orderCount' => $service->orderCount(),
                            'average' => $service->averageFeedback(),
                            'freelance' => $service->freelance ? $service->freelance->only('nom', 'prenom', 'identifiant', 'level') : null,
                            'user' => $service->freelance->user ? $service->freelance->user->only('name', 'profile_photo_path', 'profile_photo_url') : null,
                            'category' => $service->category ? $service->category->only('name', 'id') : null,
                        ]),

                    'subcategories' => SubCategory::where('category_id', $subcategoryElement->category_id)
                        // Cette ligne compte le nombre de services associés à chaque sous-catégorie
                        ->get()
                        ->map(function ($subcategory) {
                            return [
                                'id' => $subcategory->id,
                                'name' => $subcategory->name,
                                'illustration' => $subcategory->illustration,
                                'service_count' => count($subcategory->services()), // Récupérez le comptage des services
                            ];
                        }),

                    'subcategory' => $subcategoryElement,
                    'category'=> $subcategoryElement->category,
                    'tags' => $service->pluck('tag')
                    ->map(function ($tag) {
                        // Vérifiez si $tag est une chaîne avant de la décoder
                        return is_string($tag) ? json_decode($tag, true) : $tag;
                    })
                        ->flatten() // Pour obtenir une collection à une seule dimension
                        ->unique()
                        ->all()
                ]
            );
        } else {

            return redirect()->back();
        }


        //$category = Category::query();
        //return Inertia::render('Web/Category/SubCategoryName');
    }


    public function oneService($service_numero)
    {

        $service = Service::where('service_numero', $service_numero)
        ->with([
            'freelance' => function ($query) {
                $query->select('id', 'nom', 'prenom','level');
                    // Remplacez 'autre_champ' par d'autres champs que vous souhaitez récupérer
            }
        ])
            ->first();

        if($service == null){
            return redirect()->back();
        }

        $otherService=Service::where('id','!=' ,$service->id)->where('category_id', 'like', '%' .$service->category_id . '%')->take(6)->get();

        $serviceData = [

            'freelance' => $service->freelance,
            'user' => $service->freelance->data,
        ];


        return Inertia::render('Web/Service/OneService',
        [
            'service'=>$service,
            'otherService' => $otherService,

        ]);
    }
}
