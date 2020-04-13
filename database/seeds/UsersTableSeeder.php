<?php
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'products-admin',
            'email' => 'products-admin@laravel.com',
            'password' => bcrypt('123456')
        ]);
        factory(User::class, 2)->create();
    }
}
