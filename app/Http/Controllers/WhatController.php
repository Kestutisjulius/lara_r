<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; //?Render From REACT

class WhatController extends Controller
{
    public function colors()
    {
        $colors = session()->get('colors', ['crimson', 'skyBlue', 'pink']);

        return Inertia::render('Colors', [
            'niceColors' => $colors,
            'saveUrl' => route('save_colors')
        ]);
    }
    public function addColors(Request $request){

        session()->put('colors', $request->all());

        return response()->json(
            ['msg'=>'save']
        );
    }
}
