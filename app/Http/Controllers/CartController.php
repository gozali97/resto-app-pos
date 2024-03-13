<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $number, Product $product)
    {
        $cart = Cart::query()->where('table_id', $number)->where('product_id', $product->id)->first();

        if(!$cart){
            Cart::create([
                'table_id' => $number,
                'product_id' => $product->id,
                'price' => $product->price,
                'quantity' => 1,
                'status' => 'pending',
            ]);
        }else{
            $cart->price = $cart->price + $product->price;
            $cart->quantity = $cart->quantity + 1;
            $cart->save();
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
