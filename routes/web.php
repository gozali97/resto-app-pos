<?php

use App\Http\Controllers\ProfileController;
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

//admin routes
//Route::get('/admin', function () {
//    return redirect()->route('admin.login');
//});

//Route::middleware('redirectAdmin')->prefix('admin')->group(function () {
//    Route::get('/login', [\App\Http\Controllers\Admin\AdminAuthController::class, 'showLoginForm'])->name('admin.login');
//    Route::post('/login', [\App\Http\Controllers\Admin\AdminAuthController::class, 'login'])->name('admin.login.post');
//    Route::post('/logout', [\App\Http\Controllers\Admin\AdminAuthController::class, 'logout'])->name('admin.logout');
//});
//
//
//Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
//    Route::get('/dashboard', [\App\Http\Controllers\Admin\AdminController::class, 'dashboard'])->name('admin.dashboard');
//
//    Route::get('/number-table-resource', [\App\Http\Controllers\Admin\NumberTableController::class, 'index'])->name('numberTable.index');
//    Route::get('/number-table-resource/create', [\App\Http\Controllers\Admin\NumberTableController::class, 'create'])->name('numberTable.create');
//    Route::post('/number-table-resource/store', [\App\Http\Controllers\Admin\NumberTableController::class, 'store'])->name('numberTable.store');
//    Route::get('/number-table-resource/edit/{id}', [\App\Http\Controllers\Admin\NumberTableController::class, 'edit'])->name('numberTable.edit');
//    Route::post('/number-table-resource/update/{id}', [\App\Http\Controllers\Admin\NumberTableController::class, 'update'])->name('numberTable.update');
//    Route::get('/number-table-resource/destroy/{id}', [\App\Http\Controllers\Admin\NumberTableController::class, 'destroy'])->name('numberTable.destroy');
//});
//end admin routes


//user routes
Route::get('/', [\App\Http\Controllers\DashboardController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin/qr-print/{qr}', [\App\Http\Controllers\Admin\AdminController::class, 'printQr'])->name('admin.print-qr');

    Route::get('/product', [\App\Http\Controllers\User\ProductController::class, 'index'])->name('product.index');
});

require __DIR__.'/auth.php';
