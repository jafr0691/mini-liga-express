<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Game;
use App\Models\Team;

class GameFactory extends Factory
{
    protected $model = Game::class;

    public function definition()
    {
        return [
            'home_team_id' => Team::factory(),
            'away_team_id' => Team::factory(),
            'home_score' => 0,
            'away_score' => 0,
            'played_at' => null,
        ];
    }
}
