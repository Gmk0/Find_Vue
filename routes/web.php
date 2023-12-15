<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Freelance\CommandeFreelance;
use App\Http\Controllers\Freelance\FreelanceAuth;
use App\Http\Controllers\Freelance\MissionFreelance;
use App\Http\Controllers\Freelance\ProfileFreelance;
use App\Http\Controllers\Freelance\ServiceFreelance;
use App\Http\Controllers\Freelance\TransactionFreelance;
use App\Http\Controllers\ProfileController as ControllersProfileController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\User\ApiUserController;
use App\Http\Controllers\User\AuthSocialLite;
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
use App\Http\Controllers\AuthController;
use App\Models\Category;
use App\Http\Controllers\User\parainageController;
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
     Route::post('/send-feedback','sendFedback')->name('sendFeedbackPost')->middleware('auth');

});


Route::controller(RegistrationController::class)->group(function(){
    Route::get('/registration', 'begin')->name('register.begin');
    Route::get('/registration/info', 'info')->name('register.etape.1');

     Route::post('/verification-send', 'sendEmail')->name('verificationMail');
    Route::post('/verification-verify', 'verifyCode')->name('verificationCode');


});

Route::get('/auth/register/{code?}',[AuthController::class,'register'])->name('auth.register')->middleware('guest');

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

            Route::get('/signalement', 'signalement')->name('user.signalement');
            Route::get('/feedback', 'feedback')->name('user.feedback');
            Route::get('/aide', 'aide')->name('user.aide');

        });


        Route::controller(UserMissionController::class)->group(function(){

            Route::get('/mission', 'missionsList')->name('user.missions');

            Route::get('/mission/candidature/{mission_numero}', 'candidature')->name('user.missions.candidature');

            Route::get('/mission/gestion/{mission_numero}/{mission_response}', 'missionGestion')->name('user.missions.missionGestion');
            Route::get('/mission/gestion/{mission_numero}/{mission_response}/paiement', 'missionPaiement')->name('user.missions.missionPaiement');

            Route::get('/mission-paiement-status', 'checkoutStatusMaxiMission')->name('checkoutStatusMaxiMission');

            Route::get('/mission-paiement-status/{transaction_numero}', 'statusPaiement')->name('statusPaiementMission');

            Route::post('/mission-paiement', 'missionPaiementMaxi')->name('user.missions.missionPaiementMaxi');

            Route::get('/mission/edit/{mission_numero}', 'missionEdit')->name('user.missionEdit');
            Route::post('/mission/edit', 'missionEditSave')->name('missionEdit');
            Route::post('/mission/removeFile', 'removeFileMission')->name('removeFileMission');
            Route::post('/mission-accepter', 'accepterMission')->name('accepterMission');
            Route::post('/mission-refuser', 'refuserMission')->name('refuserMission');
            Route::post('/mission-delete', 'deleteMission')->name('deleteMission');
            Route::post('/mission-contacterUser', 'contacterUser')->name('user.missions.contacterUser');
        });


        Route::controller(ProfileController::class)->group(function(){

            Route::get('/profils', 'show')->name('user.profile');
        });


        Route::controller(CommandeController::class)->group(function(){
            Route::get('/commandes/{order_numero}', 'commandesOne')->name('user.commandes.one');
            Route::get('/commandes', 'commandesList')->name('user.commandes');
            Route::post('/commandes-feedbakc', 'sendFeeback')->name('user.commandes.sendFeeback');
            Route::post('/commandes-feedbak', 'debloquerPaiement')->name('user.paiements.debloquerPaiement');
            Route::post('/commandes-contacterUser', 'contacterUser')->name('user.paiements.contacterUser');



        });

        Route::get('/chat/{id?}', ChatController::class)->name('user.chat');

        Route::controller(ChatController::class)->group(function(){

            Route::post('/chat-create', 'createChat')->name('user.createChat');
            Route::post('/chat-message', 'SendMessage')->name('chat.Send');
            Route::post('/contactFreelance', 'contactFreelance')->name('contactFreelance');
            Route::post('/proposalPrice', 'proposalPrice')->name('proposalPrice');

            Route::post('/proposal-get-price', 'proposalGetPrice')->name('proposalGetPrice');

            Route::post('/proposal-change-price', 'proposalChangePrice')->name('proposalChangePrice');

        });


    });

    Route::controller(CheckoutController::class)->group(function(){

        Route::get('/panier',  'checkout')->name('panier');
        Route::post('/checkoutMaxi', 'checkoutMaxi')->name('checkoutMaxi');
        Route::post('/checkoutMaxiCustom', 'checkoutMaxiCustom')->name('checkoutMaxiCustom');
        Route::get('/checkout/status-maxi',  'paiment_maxi')->name('checkoutStatusMaxiService');
        Route::get('/checkout/status-maxi-custom',  'paimentMaxiCustom')->name('checkoutStatusMaxiServiceCustom');
        Route::get('/paiement-status/{transaction_numero}',  'paiementStatus')->name('paiementStatus');

        Route::get('/paiement-service/{uniqueId}', 'LinkCustomPaid')->name('customLink.paid');
    });

    Route::controller(parainageController::class)->group(function(){
        Route::get('/api/getCodeUser', 'getCodeUser');

        Route::post('/api/generate-code-parainage','generateCode');

        Route::get('/api/getAllUserParainer', 'getAllUser');

    });



    Route::controller(RegistrationController::class)->group(function(){
        Route::get('/registration/freelance', 'Registration')->name('freelancer.register')->middleware('freelance_exist');
        Route::put('/updateProfileUser', 'updateProfileUser')->name('updateProfileUser');
        Route::post('/register/freelance', 'register')->name('register.freelance');
    });


    Route::middleware('freelance')->group(function(){
    Route::prefix('freelance')->group(function(){

        Route::controller(FreelanceAuth::class)->group(function(){
            Route::get('/dashboard', 'dashboard')->name('freelance.dashboard');
        });

        Route::controller(ServiceFreelance::class)->group(function(){

            Route::get('/services', 'show')->name('freelance.services');
            Route::get('/services/creation', 'create')->name('freelance.services.creation');
            Route::post('/services/creation', 'createTion')->name('freelance.services.post');
            Route::get('/services/edition/{service_numero}', 'edit')->name('freelance.services.edition');
            Route::get('/services/ajout/{service_numero}', 'AddLevel')->name('freelance.services.level');

            Route::post('/services/publisher','publishService')->name('freelance.services.publisher');
            Route::post('/services/removeFiles', 'removeFileService')->name('removeFileService');
            Route::post('/services/addFiles', 'addFiles')->name('addImageService');

            Route::post('/services/edition', 'editService')->name('freelance.services.edition.save');


        });

        Route::controller(CommandeFreelance::class)->group(function(){

            Route::get('/commandes', 'show')->name('freelance.commandes');
            Route::get('/commandes/gestion/{order_numero}', 'commmandeGestion')->name('freelance.commandes.one');

            Route::post('/commande-gestion','commandeGestion')->name('commande.feedback');
            Route::post('/commande-rapport', 'commandeRapport')->name('commande.rapport');

            Route::post('/publishCommentaire', 'publishCommentaire')->name('publishCommentaire');


        });

        Route::controller(TransactionFreelance::class)->group(function () {

            Route::get('/transactions', 'show')->name('freelance.transactions');

                Route::get('/transactions/{transaction_numero}', 'showTransaction')->name('freelance.transactions.one');


            Route::get('/paiements', 'RetraitArgent')->name('freelance.paiements');
            Route::get('/paiements/retrait', 'RetraitArgent')->name('freelance.paiements.retrait');
            Route::get('/paiements/releves', 'showTransactionReleves')->name('freelance.paiements.releves');

        });

        Route::controller(MissionFreelance::class)->group(function () {
            Route::get('/missions', 'show')->name('freelance.missions');

            Route::get('/missions/accepter', 'show')->name('freelance.missions.accepter');

            Route::get('/missions/postuler/{mission_numero}', 'postuler')->name('freelance.missions.postuler');

            Route::post('/missions-postuler', 'postulerSend')->name('freelance.missions.postulerSend');
        });

        Route::controller(ChatController::class)->group(function () {

            Route::get('/chat/{id?}','freelanceChat')->name('freelance.chat');
            Route::post('/acceptPropasalUser', 'acceptPropasalUser')->name('acceptPropasalUser');

                Route::post('/declinePropasalUser', 'declinePropasalUser')->name('declinePropasalUser');



        });

        Route::controller(ProfileFreelance::class)->group(function () {

            Route::get('/profile','show')->name('freelance.profile');

            Route::get('/realisations', 'realisations')->name('freelance.realisations');
                Route::get('/realisations/ajout', 'realisationsAjout')->name('freelance.realisationsAjout');

                Route::get('/realisations/edit/{id}', 'realisationsEdit')->name('freelance.realisationsEdit');
                Route::post('/realisations/edit-post', 'editRealisation')->name('freelance.editRealisation');

            Route::post('/realisations-add', 'addRealisation')->name('addRealisation');
            Route::post('/removeOneFile', 'removeOneFile')->name('removeOneFile');
            Route::post('/profile-add', 'addProfilePartOne')->name('addProfilePartOne');

            Route::post('/removeRealisation', 'removeRealisation')->name('removeRealisation');


            Route::post('/addCertification', 'addCertification')->name('addCertification');
            Route::post('/addEducation', 'addEducation')->name('addEducation');
            Route::post('/addComptes', 'addComptes')->name('addComptes');
            Route::post('/removeElement', 'removeElement')->name('removeElement');
            Route::post('/editEducation', 'editEducation')->name('editEducation');
            Route::post('/editCertification', 'editCertification')->name('editCertification');
            Route::post('/addCompetences', 'addCompetences')->name('addCompetences');
            Route::post('/editCompetences', 'editCompetences')->name('editCompetences');
            Route::post('/editComptes', 'editComptes')->name('editComptes');
            Route::post('/addLangue', 'addLangue')->name('addLangue');
            Route::post('/editLangue', 'editLangue')->name('editLangue');







        });






    });
    });
});










Route::controller(ApiController::class)->group(function(){
    Route::get('/api/subcategoriesAll', 'subcategoriesAll')->name('subcategoriesAll');
    Route::get('/api/fetchAll', 'getCategories')->name('fetchAllCategory');
    Route::get('/api/subcategories/{categoryId}', 'getByCategoryId')->name('fetchAllSubCategory');

    Route::post('/api/search', 'search')->name('searchElement');

});




Route::controller(ApiUserController::class)->group(function(){
    Route::get('/api/fetchLastUserMessage/{id}', 'fetchLastUserMessage')->name('fetchAllSubCategory');
    Route::get('/api/fetchLastCommande/{id}', 'fetchLastCommande')->name('fetchLastCommande');
    Route::get('/api/fetchLastNotification', 'fetchLastNotification')->name('fetchLastNotification');
    Route::get('/api/removeNotification/{id}', 'removeNotification')->name('removeNotification');
    Route::get('/api/fetchLastMissions','lastMissions')->name('lastMissions');
    Route::get('/api/getNotificationParametres','getNotificationParametres');
    Route::post('/api/UpdateNotificationParametres', 'updateNotificationParametres')->name('updateNotificationParametres');

    Route::get('/api/getLastFaq', 'fetchLastFaq');

});


Route::controller(AuthSocialLite::class)->group(function () {
    Route::get('auth/facebook', 'redirectToFacebook')->name('auth.facebook');
    Route::get('auth/facebook/callback', 'handleFacebookCallback');
    Route::get('auth/google', 'redirectToGoogle')->name('auth.google');
    Route::get('auth/google/callback', 'handleGoogleCallback');
});



Route::get('/storage-link', function () {
    Artisan::call('storage:link');
});

Route::get('/view-cache', function () {
    Artisan::call('view:cache');
});


Route::get('/test', function () {
    return Inertia::render('Test/Test');
});
