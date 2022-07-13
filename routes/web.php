<?php

use Illuminate\Support\Facades\Route;
use App\Models\Immagini;
use App\Models\User;
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

/*Route::get('/', function () {
    return view('welcome');
});*/
   
 
Route::get('login',[App\Http\Controllers\Login::class,'vista']);
Route::post('login',[App\Http\Controllers\Login::class,'check']);
Route::get('logout',[App\Http\Controllers\Login::class,'logout']);

Route::get('registrati',[App\Http\Controllers\Registrazione::class,'vista']);
Route::post('registrati',[App\Http\Controllers\Registrazione::class,'check']);

Route::get('sito',[App\Http\Controllers\Sito::class,'vista']);
Route::get('sito_cerca',[App\Http\Controllers\Sito::class,'list']);
Route::get('lista',[App\Http\Controllers\Sito::class,'carica_immagini']);
Route::get('lista2',[App\Http\Controllers\Sito::class,'list2']);
Route::post("sito4",[App\Http\Controllers\Sito::class,'add_like']);
Route::post("sito2",[App\Http\Controllers\Sito::class,'remove_like']);
Route::post("sito",[App\Http\Controllers\Sito::class,'commenta']);
Route::get('mostra',[App\Http\Controllers\Sito::class,'pref']);
Route::post('commenti',[App\Http\Controllers\Sito::class,'commenti_tot']);



//preferiti
Route::get('preferiti',[App\Http\Controllers\Preferiti::class,'vista']);


//carrello
Route::post('selezionato',[App\Http\Controllers\CarrelloController::class,'aggiungi']);
Route::get('carrello',[App\Http\Controllers\CarrelloController::class,'vista']);
Route::post('carrello',[App\Http\Controllers\CarrelloController::class,'commenta']);
Route::get('lista_carrello',[App\Http\Controllers\CarrelloController::class,'list']);
Route::post('remove',[App\Http\Controllers\CarrelloController::class,'rimuovi']);
Route::post('aggiungi_commento',[App\Http\Controllers\CarrelloController::class,'commenta']);

