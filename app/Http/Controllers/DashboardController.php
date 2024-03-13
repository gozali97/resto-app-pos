<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index($number, Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->select(
                'id',
                'product_name',
                'slug',
                'stock',
                'price',
                'path_image',
                'category_id'
            )
            ->paginate(12)
            ->withQueryString();

        $carts = Cart::where('table_id', $number)->whereNull('paid_at')->count();

        return Inertia::render('Home')->with([
            'numberTable' => $number,
            'carts' => $carts,
            'products' => ProductResource::collection($products)
        ]);
    }

    public function show(Request $request, $number, $slug)
    {

        $product = Product::query()
            ->with('category')
            ->where('slug', $slug)
            ->first();

        return Inertia::render('DetailProduct')->with([
            'product' => $product,
            'numberTable' => $number,
        ]);
    }
}

