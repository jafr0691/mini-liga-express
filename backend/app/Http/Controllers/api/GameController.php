<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;

class GameController extends Controller
{
    public function index()
    {
        return Game::with(['homeTeam', 'awayTeam', 'result'])->get();
    }
}

