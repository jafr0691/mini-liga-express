<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Team;
use App\Models\Game;

class StandingTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function calculates_standings_correctly()
    {
        // Crear equipos
        $teamA = Team::factory()->create(['name' => 'Team A']);
        $teamB = Team::factory()->create(['name' => 'Team B']);

        // Crear juegos
        Game::factory()->create([
            'home_team_id' => $teamA->id,
            'away_team_id' => $teamB->id,
            'home_score' => 2,
            'away_score' => 0,
            'played_at' => now(),
        ]);

        Game::factory()->create([
            'home_team_id' => $teamB->id,
            'away_team_id' => $teamA->id,
            'home_score' => 1,
            'away_score' => 1,
            'played_at' => now(),
        ]);

        // Llamar API
        $response = $this->getJson('/api/standings');

        // Verificar status
        $response->assertStatus(200);

        // Verificar estructura JSON
        $response->assertJsonStructure([
            '*' => ['team', 'points', 'played', 'goals_for', 'goals_against', 'goal_diff']
        ]);

        $standings = $response->json();

        $this->assertCount(2, $standings);

        // Team A
        $this->assertEquals('Team A', $standings[0]['team']);
        $this->assertEquals(4, $standings[0]['points']); // 3 + 1
        $this->assertEquals(2, $standings[0]['played']);
        $this->assertEquals(3, $standings[0]['goals_for']); // 2+1
        $this->assertEquals(1, $standings[0]['goals_against']); // 0+1
        $this->assertEquals(2, $standings[0]['goal_diff']); // 3-1

        // Team B
        $this->assertEquals('Team B', $standings[1]['team']);
        $this->assertEquals(1, $standings[1]['points']); // 0 + 1
        $this->assertEquals(2, $standings[1]['played']);
        $this->assertEquals(1, $standings[1]['goals_for']); // 0+1
        $this->assertEquals(3, $standings[1]['goals_against']); // 2+1
        $this->assertEquals(-2, $standings[1]['goal_diff']); // 1-3
    }
}
