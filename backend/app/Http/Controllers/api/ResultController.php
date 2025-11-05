<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Result;
use App\Models\Game;
use App\Models\Team;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function store(Request $request, $id)
    {
        $game = Game::findOrFail($id);

        if ($game->is_played) {
            return response()->json(['message' => 'Game already played'], 400);
        }

        $validated = $request->validate([
            'home_score' => 'required|integer|min:0',
            'away_score' => 'required|integer|min:0',
        ]);

        $result = Result::create([
            'game_id' => $game->id,
            'home_score' => $validated['home_score'],
            'away_score' => $validated['away_score'],
        ]);

        $game->update(['is_played' => true]);

        $homeTeam = $game->homeTeam;
        $awayTeam = $game->awayTeam;

        if ($validated['home_score'] > $validated['away_score']) {
            $homeTeam->increment('points', 3);
        } elseif ($validated['home_score'] < $validated['away_score']) {
            $awayTeam->increment('points', 3);
        } else {
            $homeTeam->increment('points', 1);
            $awayTeam->increment('points', 1);
        }

        return response()->json($result, 201);
    }
}
