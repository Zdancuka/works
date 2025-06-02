<x-layout>
    <x-slot name="title">
        Job Listings
    </x-slot>

    <h1 class="mb-4">Job Listings</h1>

    @can('create', App\Models\Listing::class)
    <a href="{{ route('listing.create') }}" class="btn btn-primary mb-4">Create Job Listing</a>
    @endcan

    @if ($listings->count())
    <div class="row">
        @foreach ($listings as $listing)
        <div class="col-md-6 col-lg-4">
            <x-job-card :listing="$listing">
                @can('delete', $listing)
                <form action="{{ route('listing.destroy', $listing) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this job listing?');" class="mt-2">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                </form>
                @endcan
            </x-job-card>
        </div>
        @endforeach
    </div>
    @else
    <div class="alert alert-info">No job listings available.</div>
    @endif
</x-layout>