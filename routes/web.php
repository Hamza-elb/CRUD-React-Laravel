<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});

Auth::routes();

Route::get('/searchemail/{email}', 'App\Http\Controllers\StudentController@searchEmail');
Route::get('/searchname/{name}', 'App\Http\Controllers\StudentController@searchName');
Route::get('/search/{name}/{email}', 'App\Http\Controllers\StudentController@search');

Route::get('/searche/{email}', 'App\Http\Controllers\AdminController@searchEmail');
Route::get('/searchn/{name}', 'App\Http\Controllers\AdminController@searchName');
Route::get('/search2/{name}/{email}', 'App\Http\Controllers\AdminController@search');




Route::get('/index', 'App\Http\Controllers\StudentController@index');
Route::post('/store', 'App\Http\Controllers\StudentController@store');
Route::delete('/destroy/{id}', 'App\Http\Controllers\StudentController@destroy');
Route::get('/edit/{id}', 'App\Http\Controllers\StudentController@edit');
Route::put('/update/{id}', 'App\Http\Controllers\StudentController@update');



Route::get('/admin/index', 'App\Http\Controllers\AdminController@index');
Route::delete('/admin/destroy/{id}', 'App\Http\Controllers\AdminController@destroy');
Route::post('/addUser', 'App\Http\Controllers\AdminController@store');
Route::get('/editUser/{id}', 'App\Http\Controllers\AdminController@edit');
Route::put('/updateUser/{id}', 'App\Http\Controllers\AdminController@update');
