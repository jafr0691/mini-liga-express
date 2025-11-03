<?php

namespace App\Services;

use App\Models\Game;

class GameService
{
    /**
     * Lista los partidos, filtrando si ya fueron jugados o no.
     */
    public function listGames($played = null)
    {
        $query = Game::with(['homeTeam', 'awayTeam']);

        if (!is_null($played)) {
            if ($played) {
                $query->whereNotNull('played_at');
            } else {
                $query->whereNull('played_at');
            }
        }

        return $query->orderBy('played_at', 'desc')->get();
    }

    /**
     * Registra el resultado de un partido.
     */
    public function reportResult($gameId, array $data)
    {
        $game = Game::findOrFail($gameId);

        // Si ya se jugó, evita duplicar resultado
        if ($game->played_at) {
            throw new \Exception("Este partido ya tiene resultado registrado");
        }

        $game->update([
            'home_score' => $data['home_score'],
            'away_score' => $data['away_score'],
            'played_at' => now(),
        ]);

        return $game->load(['homeTeam', 'awayTeam']);
    }
}
