<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller;
use App\Models\Listing;
use Illuminate\Http\Request;
use App\Models\JobCategory;
use App\Models\EmploymentType;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class ListingController extends Controller
{
    public function __construct()
    {
        // Только авторизованные пользователи могут изменять данные
        $this->middleware('auth')->except(['index', 'show']);
    }


    public function index()
    {
        $listings = Listing::all();
        return view('listings.index', compact('listings'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->cannot('create', Listing::class)) {
            abort(403, 'You are not authorized to create a job listing.');
        }

        $categories = JobCategory::all();
        $types = EmploymentType::all();
        return view('listings.create', compact('categories', 'types'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->user()->cannot('create', Listing::class)) {
            abort(403, 'You are not authorized to store a job listing.');
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'company_name' => 'required|string|max:255',
            'salary' => 'required|nullable|numeric|min:0|max:9999999999.99',
            'job_category_id' => 'required|exists:job_categories,id',
            'employment_type_id' => 'required|exists:employment_types,id',
        ]);

        $validated['user_id'] = Auth::id();

        Listing::create($validated);

        return redirect()->route('listing.index')->with('success', 'Listing created successfully!');
    }

    /**
     * Display the specified resource.
     */


    public function show(Request $request, Listing $listing)
    {
        $listing->load('applications.user');

        // Показываем заявки всем
        $showApplications = true;

        return view('listings.show', compact('listing', 'showApplications'));
    }




    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        // Fetch the job listing by its ID
        $listing = Listing::findOrFail($id);

        if ($request->user()->cannot('update', $listing)) {
            abort(403, 'You are not authorized to edit this job listing.');
        }

        // Get all categories and employment types for the dropdowns
        $categories = JobCategory::all();
        $types = EmploymentType::all();

        // Pass the listing, categories, and types to the edit view
        return view('listings.edit', compact('listing', 'categories', 'types'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $listing = Listing::findOrFail($id);

        if ($request->user()->cannot('update', $listing)) {
            abort(403, 'You are not authorized to update this job listing.');
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'company_name' => 'required|string|max:255',
            'salary' => 'required|nullable|numeric|min:0|max:9999999999.99', // <- добавлен max
            'job_category_id' => 'required|exists:job_categories,id',
            'employment_type_id' => 'required|exists:employment_types,id',
        ]);

        $listing->update($validated);

        return redirect()->route('listing.show', $listing->id)
            ->with('success', 'Job listing updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Listing $listing)
    {
        if ($request->user()->cannot('delete', $listing)) {
            abort(403, 'You are not authorized to delete this job listing.');
        }
        $listing->delete();

        return redirect()->route('listing.index')->with('success', 'Job listing deleted successfully.');
    }
}
