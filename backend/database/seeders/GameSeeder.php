<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('games')->insert([
            ['home_team_id'=>1,'away_team_id'=>2,'match_date'=>now()],
            ['home_team_id'=>2,'away_team_id'=>3,'match_date'=>now()],
        ]);
    }
}
