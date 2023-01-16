<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {           
        User::create([
            'first_name' => 'Sample',
            'last_name' => 'QA',
            'email' => 'qa@example.com',
            'role' => 2, // Role 2 for QA
            'password' => Hash::make(12345678),
        ]);

        User::create([
            'first_name' => 'Sample',
            'last_name' => 'RD',
            'email' => 'rd@example.com',
            'role' => 3, // Role 3 for RD
            'password' => Hash::make(12345678),
        ]);
    }
}
