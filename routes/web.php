<?php

use App\Http\Controllers\Backend\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

## Admin routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        $data['metaTitle'] = "Dashboard";
        return inertia('Backend/Dashboard', $data)->withViewData(['metaTitle' => $data['metaTitle']]);
    });

    ### User routes
    Route::controller(UsersController::class)->prefix('users')->name('users.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/show/{id}', 'show')->name('show');
    });
});
