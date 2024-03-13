<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'price' => $price = $this->price,
            'quantity' => $this->quantity,
            'price_tax' => (int) round((11/100) * $price, 0) + $price,
            'product' => [
                'product_name' => $this->product->product_name,
                'slug' => $this->product->slug,
            ],
            'category' => [
                'category_name' => $this->product->category->category_name
            ],
            'table' => [
                'number' => $this->table->number,
            ]
        ];
    }
}
