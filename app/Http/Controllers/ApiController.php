<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    //

    public function getCategories()
    {
        // Récupérez les catégories depuis la base de données
        $categories = Category::all();

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['categories' => $categories], 200);
    }
}
