<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'category_name' => 'Food',
            'path_image'=> 'category/food.jpg'
        ]);
        Category::create([
            'category_name' => 'Drinks',
            'path_image'=> 'category/drinks.jpg'
        ]);
        Category::create([
            'category_name' => 'Cake',
            'path_image'=> 'category/cake.jpg'
        ]);
        Category::create([
            'category_name' => 'Snack',
            'path_image'=> 'category/snack.jpg'
        ]);
        Category::create([
            'category_name' => 'Coffee',
            'path_image'=> 'category/coffee.jpg'
        ]);
    }
}
