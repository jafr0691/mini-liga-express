<?php

namespace App\Services;

use App\Models\Team;
use App\Models\Game;

class StandingService
{
    public function calculate()
    {
        $teams = Team::all()->map(function ($team) {
            $games = Game::where(function ($q) use ($team) {
                $q->where('home_team_id', $team->id)
                  ->orWhere('away_team_id', $team->id);
            })
            ->whereNotNull('home_score')
            ->whereNotNull('away_score')
            ->get();

            $points = 0;
            $goals_for = 0;
            $goals_against = 0;

            foreach ($games as $m) {
                $is_home = $m->home_team_id === $team->id;
                $gf = $is_home ? $m->home_score : $m->away_score;
                $ga = $is_home ? $m->away_score : $m->home_score;

                $goals_for += $gf;
                $goals_against += $ga;

                if ($gf > $ga) $points += 3;
                elseif ($gf == $ga) $points += 1;
            }

            return [
                'team' => $team->name,
                'points' => $points,
                'played' => $games->count(),
                'goals_for' => $goals_for,
                'goals_against' => $goals_against,
                'goal_diff' => $goals_for - $goals_against,
            ];
        });

        $sorted = $teams->sortByDesc('points')
                        ->sortByDesc('goal_diff')
                        ->sortByDesc('goals_for')
                        ->values();

        return $sorted->toArray();
    }
}
