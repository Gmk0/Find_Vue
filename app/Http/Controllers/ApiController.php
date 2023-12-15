<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Service;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\String_;

class ApiController extends Controller
{
    //

    public function getCategories()
    {
        // Récupérez les catégories depuis la base de données
        $categories = Category::get()->map(function ($categories) {
            return [
                'id' => $categories->id,
                'name' => $categories->name,
                'subcategories' => $categories->subCategories ? $categories->subCategories : null,
                'media' => $categories->getMedia('categories')->map(function ($media) {
                    return [
                        'url' => $media->getUrl(),
                        'alt' => $media->name,
                    ];
                }),
            ];
        });

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['categories' => $categories], 200);
    }

    public function getByCategoryId($categoryId)
    {

        $subcategories = SubCategory::where('category_id', $categoryId)->get();
        return response()->json(['subcategories' => $subcategories], 200);
    }

    public function subcategoriesAll()
    {
        $subcategories = SubCategory::pluck('id','name','category_id');

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['subCategories' => $subcategories], 200);
    }

    public function search(Request $request)
    {

       try{


            $value  = $request->search;
            $results = [];
            $results = Service::with('category')
                ->where(function ($query) use ($value) {

                    $keywords = explode(' ', $value);
                    foreach ($keywords as $keyword) {
                        $query->orWhere('title', 'like', '%' . $keyword . '%')
                            ->orWhereHas('category', function ($query) use ($keyword) {
                                $query->where('name', 'like', '%' . $keyword . '%');
                            });
                    }
                })
                ->limit(10)
                ->get();


            return response()->json(['results' => $results], 200);

       }catch (\Exception $e){
            return response()->json(['results' => []], 203);


       }

      ;
    }
}
