<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\NumberTable;
use App\Models\Product;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
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
    public function store(Request $request)
    {
        $validasi = Validator::make($request->all(), [
            'costumer_name' => ['required'],
            'payment_value' => ['required'],
            'change_value' => ['required'],
            'type' => ['required'],
            'cart' => ['required', 'array'],
        ]);

        if ($validasi->fails()) {
            $errors = $validasi->errors()->all();
            return back()->withErrors($errors)->withInput();
        }

        $table = NumberTable::query()->where('id', $request->table_id)->first();

        $cart_ids = $request->collect('cart')->pluck('id');
        $order_id = 'order-'.now()->format('Y').$table->number.$cart_ids->implode('');

        $transaction = new Transaction;
        $transaction->no_table = $table->number;
        $transaction->order_id = $order_id;
        $transaction->gross_amount = $request->gross_amount;
        $transaction->change_amount = $request->change_value;
        $transaction->payment_type = $request->type;
        if($request->type == 'cash'){
            $transaction->succeeded_at = now();
        }
        if($transaction->save()){
            foreach ($request->cart as $key => $value) {
                $cart = Cart::query()->where('id', $value['id'])->first();
                $cart->transaction_id = $transaction->id;
                $cart->paid_at = now();
                $cart->status = 'done';
                if($cart->save()){
                    $product = Product::query()->where('id', $cart->product_id)->first();
                    $product->stock = $product->stock - $cart->quantity;
                    $product->save();
                }
            }
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
