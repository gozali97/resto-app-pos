<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));

        return [
            'category_id' => rand(1, 5),
            'product_name' => $faker->foodName(),
            'price' => rand(10000, 100000),
            'stock' => rand(1, 15),
            'description' => $this->faker->sentence(),
            'status' => 1,
        ];
    }
}
