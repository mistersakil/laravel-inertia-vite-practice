<?php

use App\Http\Controllers\Backend\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

## Admin routes
Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        $data['metaTitle'] = "Dashboard";
        return inertia('Backend/Dashboard', $data)->withViewData(['metaTitle' => $data['metaTitle']]);
    });
    Route::resource('/users', UsersController::class);
});
