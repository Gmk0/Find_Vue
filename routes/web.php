<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Web\CategoryController;
use App\Http\Controllers\Web\FreelanceController;
use App\Http\Controllers\WebController;
use App\Models\Category;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(WebController::class)->group(function(){

    Route::get('/','index')->name('home');

    Route::get('/faq', 'faq')->name('faq');

    Route::get('/about', 'about')->name('about');

    Route::get('/contact', 'contact')->name('contact');

});


Route::controller(RegistrationController::class)->group(function(){
    Route::get('/registration', 'begin')->name('register.begin');
    Route::get('/registration/info', 'info')->name('register.etape.1');

});

Route::controller(FreelanceController::class)->group(function(){

    Route::get('/find-freelance','index')->name('find_freelance');
    Route::get('/find-freelance/profile/{identifiant}', 'portefolio')->where('identifiant', '(.*)')->name('profileFreelance');


});

Route::controller(CategoryController::class)->group(function(){

    Route::get('/categories/{category}/{subcategory}', 'SubCategoryName')->name('SubcategoryName');
    Route::get('/categories/{category}', 'categoryName')->name('categoryName');

    Route::get('/categories','index')->name('categories');
    Route::get('/services/{service_numero}', 'oneService')->name('oneService');
});



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::controller(RegistrationController::class)->group(function(){

        Route::get('/registration/freelance', 'Registration')->name('freelancer.register')->middleware('freelance_exist');
        Route::put('/updateProfileUser', 'updateProfileUser')->name('updateProfileUser');
        Route::post('/register/freelance', 'register')->name('register.freelance');
    });
    });







Route::controller(ApiController::class)->group(function(){
    Route::get('/api/subcategoriesAll', 'subcategoriesAll')->name('subcategoriesAll');
    Route::get('/api/fetchAll', 'getCategories')->name('fetchAllCategory');
    Route::get('/api/subcategories/{categoryId}', 'getByCategoryId')->name('fetchAllSubCategory');
});

