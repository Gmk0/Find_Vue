<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceFreelance extends Controller
{
    //


    public function liste()
    {
        return Inertia::render('Freelance/Service/Liste');
    }
    public function create()
    {
        return Inertia::render('Freelance/Service/Create');
    }
    public function edit()
    {
        return Inertia::render('Freelance/Service/Edit');
    }
    public function AddLevel()
    {
        return Inertia::render('Freelance/Service/AddLevel');
    }
}
