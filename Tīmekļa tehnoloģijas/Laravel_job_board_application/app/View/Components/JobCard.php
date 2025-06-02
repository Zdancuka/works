<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class JobCard extends Component
{
    /**
     * Create a new component instance.
     */
    public $listing;

    public function __construct($listing)
    {
        $this->listing = $listing;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.job-card');
    }
}
