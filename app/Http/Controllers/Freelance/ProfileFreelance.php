<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileFreelance extends Controller
{
    //


    public function show()
    {
        return Inertia::render('Freelance/Profile/Profile');
    }

    public function realisations()
    {
        return Inertia::render('Freelance/Profile/Realisations');
    }
}
