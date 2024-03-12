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
            'category_name' => $name = 'Food',
            'slug' => str($name)->slug(),
            'path_image'=> 'category/food.jpg'
        ]);
        Category::create([
            'category_name' => $name = 'Drinks',
            'slug' => str($name)->slug(),
            'path_image'=> 'category/drinks.jpg'
        ]);
        Category::create([
            'category_name' => $name = 'Cake',
            'slug' => str($name)->slug(),
            'path_image'=> 'category/cake.jpg'
        ]);
        Category::create([
            'category_name' => $name = 'Snack',
            'slug' => str($name)->slug(),
            'path_image'=> 'category/snack.jpg'
        ]);
        Category::create([
            'category_name' => $name = 'Coffee',
            'slug' => str($name)->slug(),
            'path_image'=> 'category/coffee.jpg'
        ]);
    }
}
