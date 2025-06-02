<x-layout>
    <x-slot name="title">
        Edit Job Listing - {{ $listing->title }}
    </x-slot>

    <h1>Edit Job Listing</h1>

    <!-- Display validation errors -->
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul class="mb-0">
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <!-- Job listing edit form -->
    <form method="POST" action="{{ route('listing.update', $listing->id) }}">
        @csrf
        @method('PUT') <!-- Indicate that this is a PUT request for updating -->

        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" name="title" class="form-control" value="{{ old('title', $listing->title) }}">
        </div>

        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea name="description" class="form-control" rows="5">{{ old('description', $listing->description) }}</textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Company Name</label>
            <input type="text" name="company_name" class="form-control" value="{{ old('company_name', $listing->company_name) }}">
        </div>

        <div class="mb-3">
            <label class="form-label">Salary</label>
            <input type="number" step="0.01" name="salary" class="form-control" value="{{ old('salary', $listing->salary) }}">
            @error('salary')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Job Category</label>
            <select name="job_category_id" class="form-select">
                <option value="">Select Category</option>
                @foreach($categories as $category)
                <option value="{{ $category->id }}" {{ old('job_category_id', $listing->job_category_id) == $category->id ? 'selected' : '' }}>
                    {{ $category->category }}
                </option>
                @endforeach
            </select>
            @error('job_category_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Employment Type</label>
            <select name="employment_type_id" class="form-select">
                <option value="">Select Type</option>
                @foreach($types as $type)
                <option value="{{ $type->id }}" {{ old('employment_type_id', $listing->employment_type_id) == $type->id ? 'selected' : '' }}>
                    {{ $type->type }}
                </option>
                @endforeach
            </select>
            @error('employment_type_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">Update Listing</button>
    </form>
</x-layout>