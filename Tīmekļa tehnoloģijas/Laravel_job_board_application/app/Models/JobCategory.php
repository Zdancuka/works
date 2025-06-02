<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobCategory extends Model
{

    // Allow mass assignment for the 'category' field
    protected $fillable = ['category'];

    public function listings()
    {
        return $this->hasMany(Listing::class, 'job_category_id');
    }
}
