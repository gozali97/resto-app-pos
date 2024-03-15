<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\NumberTable;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,$number)
    {
        $carts = Cart::query()
            ->with(['product', 'table'])
            ->where('table_id', $number)
            ->whereNull('paid_at')
            ->get();
//        return CartResource::collection($carts);
        return Inertia::render('Cart/index')->with([
            'carts' => CartResource::collection($carts)->toArray($request),
            'numberTable' => $number,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $number, Product $product)
    {

        $cart = Cart::query()
            ->where('table_id', $number)
            ->where('product_id', $product->id)
            ->first();

        $table = NumberTable::query()->where('number', $number)->first();

        if(!$cart){
            Cart::create([
                'table_id' => $table->id,
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

//        $dataProduct = Product::query()->where('id', $product->id)->first();
//        $dataProduct->stock = $dataProduct->stock - 1;
//        $dataProduct->save();

        return redirect()->route('carts.index', $number);
    }
    public function destroy($id)
    {
        $cart = Cart::findOrFail($id);

        $cart->delete();

        return redirect()->back();
    }

    public function addProduct($id)
    {
        $cart = Cart::findOrFail($id);

        $product = Product::query()->where('id', $cart->product_id)->first();

        $cart->price = $cart->price + $product->price;
        $cart->quantity = $cart->quantity + 1;

        if($cart->save()){
//            $product->stock = $product->stock - 1;
//            $product->save();

            return redirect()->back();
        }
    }


    public function removeProduct($id)
    {
        $cart = Cart::findOrFail($id);

        $product = Product::query()->where('id', $cart->product_id)->first();

        $cart->price = $cart->price - $product->price;
        $cart->quantity = $cart->quantity - 1;

        if($cart->save()){
//            $product->stock = $product->stock + 1;
//            $product->save();

            if($cart->quantity == 0){
                $cart->delete();
            }

            return redirect()->back();
        }

    }
}
