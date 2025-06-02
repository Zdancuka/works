<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Application extends Model
{
    protected $fillable = ['user_id', 'listing_id', 'status', 'cover_letter'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function listing()
    {
        return $this->belongsTo(Listing::class, 'listing_id');
    }
}

