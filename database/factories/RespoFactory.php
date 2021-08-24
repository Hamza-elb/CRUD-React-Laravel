<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RespoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the  default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'user1',
            'email' => 'user1@gmail.com',
            'roles' => 'user',
            'email_verified_at' => now(),
            'password' => Hash::make('user'), // password
            'remember_token' => Str::random(10),
        ];
    }
}
