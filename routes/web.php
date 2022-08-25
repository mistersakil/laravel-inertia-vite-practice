<?php

use App\Http\Controllers\Backend\UsersController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::prefix('admin')->group(function () {
    Route::resource('/users', UsersController::class);
});
