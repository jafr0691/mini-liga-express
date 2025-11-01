<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'goals_for', 'goals_against'];

    public function homeMatches()
    {
        return $this->hasMany(Game::class, 'home_team_id');
    }

    public function awayMatches()
    {
        return $this->hasMany(Game::class, 'away_team_id');
    }
}
