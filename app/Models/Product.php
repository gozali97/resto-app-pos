<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($product) {
            $product->slug = Str::slug($product->product_name);
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

}
