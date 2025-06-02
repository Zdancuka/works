<?php
namespace App\Providers;

use App\Models\Listing;
use App\Policies\ListingPolicy;
use App\Models\Application;
use App\Policies\ApplicationPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;


class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Listing::class => ListingPolicy::class,
        Application::class => ApplicationPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}
