<?php

namespace App\Http\Controllers;


use App\Models\Application;
use App\Models\Listing;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ApplicationController extends Controller
{
    use AuthorizesRequests;
    public function __construct()
    {
        $this->middleware('auth'); // Only authenticated users can submit applications
    }
    
    public function store(Request $request, Listing $listing)
    {
        // Ensure the user is logged in
        if (!Auth::check()) {
            abort(403, 'You must be logged in to apply for a job.');
        }

        $user = $request->user();

        // Check for duplicate application
        if ($listing->applications()->where('user_id', $user->id)->exists()) {
            return redirect()
                ->route('listing.show', $listing)
                ->with('error', 'You have already applied for this job.');
        }

        // Validate input
        $validated = $request->validate([
            'cover_letter' => 'required|string|min:20',
        ]);

        // Check if user already applied
        if ($listing->applications()->where('user_id', $request->user()->id)->exists()) {
            return redirect()->back()->with('error', 'You have already applied to this job.');
        }

        $application = $listing->applications()->create([
            'user_id' => $request->user()->id,
            'cover_letter' => $request->input('cover_letter'),
        ]);

        return redirect()
            ->route('listing.show', $listing)
            ->with('success', 'Application submitted successfully.');
    }

    public function destroy(Request $request, Application $application)
    {
        $this->authorize('delete', $application);

        $application->delete();

        return redirect()->back()->with('success', 'Application deleted successfully.');
    }
}
