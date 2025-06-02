<x-layout>
    <x-slot name="title">
        Create New Job Listing
    </x-slot>

    <h1 class="mb-4">Create New Job Listing</h1>

    <!-- Отображение ошибок валидации -->
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul class="mb-0">
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <!-- Форма создания вакансии -->
    <form method="POST" action="{{ route('listing.store') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" name="title" class="form-control" value="{{ old('title') }}">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea name="description" class="form-control" rows="5">{{ old('description') }}</textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Company Name</label>
            <input type="text" name="company_name" class="form-control" value="{{ old('company_name') }}">
        </div>
        <div class="mb-3">
            <label class="form-label">Salary</label>
            <input type="number" step="0.01" name="salary" class="form-control" value="{{ old('salary') }}">
            @error('salary')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label">Job Category</label>
            <select name="job_category_id" class="form-select">
                <option value="">Select Category</option>
                @foreach($categories as $category)
                <option value="{{ $category->id }}" {{ old('job_category_id') == $category->id ? 'selected' : '' }}>
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
                <option value="{{ $type->id }}" {{ old('employment_type_id') == $type->id ? 'selected' : '' }}>
                    {{ $type->type }}
                </option>
                @endforeach
            </select>
            @error('employment_type_id')
            <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">Create Listing</button>
    </form>
</x-layout>