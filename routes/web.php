<?php

use App\Http\Controllers\Backend\UsersController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::resource('users', UsersController::class);
