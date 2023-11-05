<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Freelance\FreelanceAuth;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\User\ChatController;
use App\Http\Controllers\User\CommandeController;
use App\Http\Controllers\User\MissionController as UserMissionController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Web\CategoryController;
use App\Http\Controllers\Web\CheckoutController;
use App\Http\Controllers\Web\FreelanceController;
use App\Http\Controllers\Web\MissionController;
use App\Http\Controllers\Web\ReportController;
use App\Http\Controllers\Web\ServiceController;
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
    Route::get('/feed-back', 'feedBack')->name('feedBack');

});


Route::controller(RegistrationController::class)->group(function(){
    Route::get('/registration', 'begin')->name('register.begin');
    Route::get('/registration/info', 'info')->name('register.etape.1');

     Route::post('/verification-send', 'sendEmail')->name('verificationMail');
    Route::post('/verification-verify', 'verifyCode')->name('verificationCode');


});

Route::controller(FreelanceController::class)->group(function(){

    Route::get('/find-freelance','index')->name('find_freelance');
    Route::get('/find-freelance/profile/{identifiant}', 'portefolio')->where('identifiant', '(.*)')->name('profileFreelance');
    Route::post('/like-freelance','Like')->name('like.freelance')->middleware('auth');



});

Route::controller(CategoryController::class)->group(function(){

    Route::get('/categories/{category}/{subcategory}', 'SubCategoryName')->name('SubcategoryName');
    Route::get('/categories/{category}', 'categoryName')->name('categoryName');

    Route::get('/categories','index')->name('categories');
    Route::get('/services/{service_numero}', 'oneService')->name('oneService');
});

Route::controller(ServiceController::class)->group(function(){

    Route::get('/services', 'allServices')->name('Allservices');

    Route::post('/service-like', 'likeService')->name('like.service');

});


Route::controller(MissionController::class)->group(function(){

    Route::get('/create-mission', 'createMission')->name('createProject')->middleware('auth');
    Route::post('/create-mission', 'storeMission')->name('storeMission');

});




Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('facturaction/{facture}', [ReportController::class, 'facture'])->where('facture', '(.*)')->name('facturation');



    Route::prefix('user')->group(function(){

        Route::controller(UserController::class)->group(function(){
            Route::get('/dashboard','dashboard')->name('user.dashboard');

           // Route::get('/commandes', 'commandesList')->name('user.commandes');
            Route::get('/transactions', 'transactionsList')->name('user.transactions');
            Route::get('/transactions/{transaction_numero}', 'transactionsListOne')->name('user.transactions.one');
        });


        Route::controller(UserMissionController::class)->group(function(){

            Route::get('/mission', 'missionsList')->name('user.missions');
            Route::get('/mission/edit/{mission_numero}', 'missionEdit')->name('user.missionEdit');
            Route::post('/mission/edit', 'missionEditSave')->name('missionEdit');
            Route::post('/mission/removeFile', 'removeFileMission')->name('removeFileMission');
        });


        Route::controller(ProfileController::class)->group(function(){

            Route::get('/profils', 'show')->name('user.profile');
        });


        Route::controller(CommandeController::class)->group(function(){
            Route::get('/commandes/{order_numero}', 'commandesOne')->name('user.commandes.one');
            Route::get('/commandes', 'commandesList')->name('user.commandes');
        });

        Route::get('/chat/{id?}', ChatController::class)->name('user.chat');

        Route::controller(ChatController::class)->group(function(){

            Route::post('/chat-create', 'createChat')->name('user.createChat');
            Route::post('/chat-message', 'SendMessage')->name('chat.Send');

        });


    });

    Route::controller(CheckoutController::class)->group(function(){

        Route::get('/panier',  'checkout')->name('panier');
        Route::post('/checkoutMaxi', 'checkoutMaxi')->name('checkoutMaxi');
        Route::get('/checkout/status-maxi',  'paiment_maxi')->name('checkoutStatusMaxiService');
        Route::get('/paiement-status/{transaction_numero}',  'paiementStatus')->name('paiementStatus');
    });



    Route::controller(RegistrationController::class)->group(function(){
        Route::get('/registration/freelance', 'Registration')->name('freelancer.register')->middleware('freelance_exist');
        Route::put('/updateProfileUser', 'updateProfileUser')->name('updateProfileUser');
        Route::post('/register/freelance', 'register')->name('register.freelance');
    });


    Route::prefix('freelance')->group(function(){

        Route::controller(FreelanceAuth::class)->group(function(){

            Route::get('/dashboard', 'dashboard')->name('freelance.dashboard');
        });

    });
});










Route::controller(ApiController::class)->group(function(){
    Route::get('/api/subcategoriesAll', 'subcategoriesAll')->name('subcategoriesAll');
    Route::get('/api/fetchAll', 'getCategories')->name('fetchAllCategory');
    Route::get('/api/subcategories/{categoryId}', 'getByCategoryId')->name('fetchAllSubCategory');
});

