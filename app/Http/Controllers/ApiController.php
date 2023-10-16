<?php

namespace App\Http\Controllers;

use App\Models\{Category, Subcategory};
use Illuminate\Http\Request;

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
                'illustration' => $categories->illustration,
                'subcategories' => $categories->subCategories ? $categories->subCategories : null,
            ];
        });

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['categories' => $categories], 200);
    }

    public function getByCategoryId($categoryId)
    {

        $subcategories = Subcategory::where('category_id', $categoryId)->get();
        return response()->json(['subcategories' => $subcategories], 200);
    }

    public function subcategoriesAll()
    {
        $subcategories = Subcategory::pluck('id','name','category_id');

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['subCategories' => $subcategories], 200);
    }
}
