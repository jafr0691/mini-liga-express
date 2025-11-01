<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\StandingService;

class StandingController extends Controller
{
    public function index(StandingService $service)
    {
        return response()->json($service->calculate());
    }
    
}