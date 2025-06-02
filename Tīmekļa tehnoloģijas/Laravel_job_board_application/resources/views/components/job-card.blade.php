<div class="card mb-3 shadow-sm">
    <div class="card-body">
        <h5 class="card-title">{{ $listing->title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ $listing->company_name }}</h6>
        <p class="card-text">{{ Str::limit($listing->description, 150) }}</p> {{-- optional trim description --}}
        <ul class="list-unstyled mb-3">
            <li><strong>Salary:</strong> {{ $listing->salary ? '$' . number_format($listing->salary, 2) : 'N/A' }}</li>
            <li><strong>Category:</strong> {{ $listing->jobCategory->category }}</li>
            <li><strong>Type:</strong> {{ $listing->employmentType->type }}</li>
            <li><strong>Posted by:</strong> {{ $listing->user->name }}</li>
            <li><strong>Date:</strong> {{ optional($listing->created_at)->format('Y-m-d') }}</li>
        </ul>
        <a href="{{ route('listing.show', $listing) }}" class="btn btn-primary">View Details</a>
    </div>
</div>
