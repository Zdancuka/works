<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApplicationController;

Route::get('/', function () {
    return view('welcome');
});

// Ресурсные маршруты для вакансий
Route::resource('listing', ListingController::class);

// Гостевые маршруты (только для неавторизованных пользователей)
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

// Выход — только для авторизованных пользователей
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::delete('/applications/{application}', [ApplicationController::class, 'destroy'])->name('applications.destroy')->middleware('auth');


Route::post('/listing/{listing}/apply', [ApplicationController::class, 'store'])
    ->middleware(middleware: 'auth')
    ->name('listing.apply');
