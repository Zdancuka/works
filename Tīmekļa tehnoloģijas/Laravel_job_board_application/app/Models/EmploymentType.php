<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmploymentType extends Model
{
    protected $fillable = ['type'];

    public function listings()
    {
        return $this->hasMany(Listing::class, 'employment_type_id');
    }
}
