<?php

namespace Database\Seeders;

use App\Models\Respo;
use Illuminate\Database\Seeder;

class RespoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Respo::factory()
            ->count(7)
            ->create();
    }
}
