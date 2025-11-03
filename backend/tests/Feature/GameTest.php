<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Team;
use App\Models\Game;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GameTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_report_a_game_result_and_update_points()
    {
        $home = Team::factory()->create();
        $away = Team::factory()->create();

        $game = Game::factory()->create([
            'home_team_id' => $home->id,
            'away_team_id' => $away->id,
        ]);

        $response = $this->postJson("/api/games/{$game->id}/result", [
            'home_score' => 2,
            'away_score' => 1,
        ]);

        $response->assertStatus(200);

        // Verifica que los resultados se guardaron correctamente
        $this->assertDatabaseHas('games', [
            'id' => $game->id,
            'home_score' => 2,
            'away_score' => 1,
        ]);
    }
}
