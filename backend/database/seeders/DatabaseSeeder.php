<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Team;
use App\Models\Game;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $teams = collect(['Dragons', 'Sharks', 'Tigers', 'Wolves'])
            ->map(fn($name) => Team::create(['name' => $name]));

        Game::create([
            'home_team_id' => $teams[0]->id,
            'away_team_id' => $teams[1]->id,
        ]);

        Game::create([
            'home_team_id' => $teams[2]->id,
            'away_team_id' => $teams[3]->id,
        ]);
    }
}
