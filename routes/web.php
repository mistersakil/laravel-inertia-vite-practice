<?php

use App\Http\Controllers\Backend\UsersController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        $data['pageTitle'] = "Dashboard";
        return inertia('Backend/Dashboard/index', $data)->withViewData(['metaTitle' => "Admin Panel"]);
    });
    Route::resource('/users', UsersController::class);
});
