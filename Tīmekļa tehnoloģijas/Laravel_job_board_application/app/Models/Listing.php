<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Listing extends Model
{
    protected $fillable = [
        'title',
        'description',
        'company_name',
        'salary',
        'user_id',
        'job_category_id',
        'employment_type_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function applications()
    {
    return $this->hasMany(Application::class, 'listing_id');
    }

    public function jobCategory()
    {
        return $this->belongsTo(JobCategory::class, 'job_category_id');
    }

    public function employmentType()
    {
        return $this->belongsTo(EmploymentType::class, 'employment_type_id');
    }
}
