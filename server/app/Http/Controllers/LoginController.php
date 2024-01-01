<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
 function login(Request $req){
    $data = $req->all();
    return $data;
 }

}
