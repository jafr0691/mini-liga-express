<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Team;
use App\Models\Game;

uses(RefreshDatabase::class);

it('calculates standings correctly', function () {
    $a = Team::create(['name' => 'A']);
    $b = Team::create(['name' => 'B']);

    // victoria A
    Game::create([
        'home_team_id' => $a->id,
        'away_team_id' => $b->id,
        'home_score' => 2,
        'away_score' => 0,
    ]);

    // empate
    Game::create([
        'home_team_id' => $b->id,
        'away_team_id' => $a->id,
        'home_score' => 1,
        'away_score' => 1,
    ]);

    $response = $this->getJson('/api/standings');
    $response->assertStatus(200);
    $standings = $response->json();

    expect($standings[0]['team'])->toBe('A');
    expect($standings[0]['points'])->toBe(4); // 3 win + 1 draw
});
