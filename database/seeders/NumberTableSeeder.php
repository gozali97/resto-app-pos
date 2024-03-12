<?php

namespace Database\Seeders;

use App\Models\NumberTable;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NumberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 1; $i <= 10; $i++) {
            $number = str_pad($i, 2, '0', STR_PAD_LEFT);
            $description = $faker->sentence();

            NumberTable::create([
                'number' => $number,
                'description' => $description,
                'qr_code' => 'https://127.0.0.1:8000/'.$number,
                'status' => 1
            ]);
        }
    }
}
