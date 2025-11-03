<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Services\GameService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    protected $service;

    public function __construct(GameService $service)
    {
        $this->service = $service;
    }

    /**
     * Muestra todos los partidos, con posibilidad de filtrar si ya fueron jugados o no.
     * GET /api/games?played=false
     */
    public function index(Request $request)
    {
        $played = $request->boolean('played', null);
        $games = $this->service->listGames($played);
        return response()->json($games);
    }

    /**
     * Reporta el resultado de un partido.
     * POST /api/games/{id}/result
     */
    public function reportResult(Request $request, $id)
    {
        $validated = $request->validate([
            'home_score' => 'required|integer|min:0',
            'away_score' => 'required|integer|min:0',
        ]);

        DB::beginTransaction();
        try {
            $result = $this->service->reportResult($id, $validated);
            DB::commit();
            return response()->json($result);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'No se pudo registrar el resultado',
                'details' => $e->getMessage()
            ], 500);
        }
    }
}
