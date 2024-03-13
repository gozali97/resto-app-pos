<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class Category extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();
        Cache::forget('categories_navbar');
        static::saving(function ($product) {
            $product->slug = Str::slug($product->category_name);
        });

    }

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }
}
