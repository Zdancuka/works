<?php

namespace Database\Seeders;


use App\Models\JobCategory;
use App\Models\EmploymentType;
use App\Models\User;
use App\Models\Listing;
use App\Models\Application;
use Illuminate\Database\Seeder;
//use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Insert job categories
        $jobCategories = [
            'Data Scientist',
            'Designer',
            'Marketing',
            'Product Manager',
            'Software Engineer'
        ];

        foreach ($jobCategories as $category) {
            JobCategory::create(['category' => $category]);
        }

        //JobCategory::create(['category' => 'Software Engineer 5']);


        // Insert employment types
        $employmentTypes = [
            'Contract',
            'Freelance',
            'Full-time',
            'Internship',
            'Part-time'
        ];

        foreach ($employmentTypes as $type) {
            EmploymentType::create(['type' => $type]);
        }

        //EmploymentType::create(['type' => 'Contract']);

        // Create 2 users
        $user1 = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
        ]);

        $user2 = User::create([
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
            'password' => 'password123',
        ]);


        // Create 2 listings
        $listing1 = Listing::create([
            'title' => 'Software Engineer at TechCorp',
            'description' => 'Develop and maintain web applications.',
            'company_name' => 'TechCorp',
            'salary' => 60000,
            'user_id' => $user1->id,
            'job_category_id' => 1, // Software Engineer
            'employment_type_id' => 2, // Full-time
        ]);

        $listing2 = Listing::create([
            'title' => 'Marketing Specialist at BrandCo',
            'description' => 'Develop marketing strategies and campaigns.',
            'company_name' => 'BrandCo',
            'salary' => 45000,
            'user_id' => $user2->id,
            'job_category_id' => 2, // Marketing
            'employment_type_id' => 2, // Freelance
        ]);

        // Create 2 applications
        Application::create([
            'cover_letter' => 'I am interested in this job.',
            'user_id' => $user2->id,
            'listing_id' => $listing1->id
        ]);

        Application::create([
            'cover_letter' => 'I have experience in this field.',
            'user_id' => $user1->id,
            'listing_id' => $listing2->id
        ]);
    }
}
