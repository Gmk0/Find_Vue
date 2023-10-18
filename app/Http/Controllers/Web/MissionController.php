<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


use Inertia\Inertia;
use App\Models\Freelance;
use App\Models\Service;
use App\Models\SubCategory;
use Illuminate\Support\Facades\Request as RequestFacade;


class MissionController extends Controller
{
    //

    public function createMission()
    {

        return Inertia::render('Web/Mission/Create',['categories'=>Category::all()]);
    }
}
