<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductSingleResource extends JsonResource
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
            'product_name' => $this->product_name,
            'slug' => $this->slug,
            'stock' => $this->stock,
            'price' => $this->price,
            'description' => $this->description,
            'path_image' => $this->path_image ? Storage::url($this->path_image) : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'category' => $this->category
                ? [
                    'id' => $this->category->id,
                    'slug' => $this->category->slug,
                    'category_name' => $this->category->category_name,
                ]
                : null,
        ];
    }
}
