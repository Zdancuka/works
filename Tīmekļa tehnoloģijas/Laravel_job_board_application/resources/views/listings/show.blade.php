<x-layout>
    <x-slot name="title">
        Job Listing - {{ $listing->title }}
    </x-slot>

    <h1>{{ $listing->title }}</h1>
    <h4>{{ $listing->company_name }}</h4>
    <p><strong>Salary:</strong> {{ $listing->salary ? '$' . number_format($listing->salary, 2) : 'N/A' }}</p>
    <p><strong>Category:</strong> {{ $listing->jobCategory->category }}</p>
    <p><strong>Type:</strong> {{ $listing->employmentType->type }}</p>
    <p><strong>Posted by:</strong> {{ $listing->user->name }}</p>
    <p><strong>Description:</strong> {{ $listing->description }}</p>
    <p><strong>Posted on:</strong> {{ $listing->created_at->format('Y-m-d') }}</p>

    @can('update', $listing)
        <a href="{{ route('listing.edit', $listing) }}" class="btn btn-warning">Edit</a>
    @endcan

    <a href="{{ route('listing.index') }}" class="btn btn-secondary">Back to Listings</a>

    @can('delete', $listing)
        <form action="{{ route('listing.destroy', $listing) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this job listing?');" class="mt-2">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    @endcan

    <hr>

    <h3>Applications</h3>

    @forelse($listing->applications as $application)
        <div class="card mb-3 p-3">
            <strong>{{ $application->user->name }}</strong> applied on {{ $application->created_at->format('Y-m-d') }}
            <p>{{ $application->cover_letter }}</p>

            @can('delete', $application)
                <form action="{{ route('applications.destroy', $application) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this application?');" class="mt-2">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger btn-sm">Delete Application</button>
                </form>
            @endcan
        </div>
    @empty
        <p>No applications yet.</p>
    @endforelse

    @auth
        @if(auth()->user()->isRegularUser())
            @php
                $application = $listing->applications()->where('user_id', auth()->id())->first();
            @endphp

            @if (!$application)
                <h3 class="mt-4">Apply for this Job</h3>
                <form action="{{ route('listing.apply', $listing) }}" method="POST" class="mt-3">
                    @csrf
                    <div class="mb-3">
                        <label for="cover_letter" class="form-label">Cover Letter</label>
                        <textarea
                            name="cover_letter"
                            id="cover_letter"
                            class="form-control @error('cover_letter') is-invalid @enderror"
                            rows="5"
                            required>{{ old('cover_letter') }}</textarea>
                        @error('cover_letter')
                            <div class="invalid-feedback">{{ $errors->first('cover_letter') }}</div>
                        @enderror
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                </form>
            @else
                <div class="alert alert-info mt-4">
                    <h5>Your Application</h5>
                    <p>{{ $application->cover_letter }}</p>
                    <small class="text-muted">Applied on {{ $application->created_at->format('Y-m-d') }}</small>
                </div>
            @endif
        @endif
    @else
        <p class="mt-4">
            <a href="{{ route('login') }}">Log in</a> to apply for this job.
        </p>
    @endauth

</x-layout>
