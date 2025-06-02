---

# Laravel Job Board Application

This is a web application for posting and submitting job applications developed using Laravel. Three types of users are supported: **administrator**, **employee (employee)** and **common user (user)**.


###  Authentication

* Registration with role selection (`admin`, `employee`, `user`)

###  Job Listings

* List of all available jobs (available to all)
* Detailed viewing of a job
* Create, edit and delete jobs (only for `employee` and `admin`)
* Binding to categories and employment type

###  Submitting applications

* Regular users can apply for vacancies
* Check for resubmission
* Deleting an application (admin only)

###  Roles and access rights

* `admin`: full access to all actions
* `employee`: can create, edit and delete their vacancies
* `user`: can only view and submit applications

## Project structure

### Controllers

* `AuthController`: registration, login, logout
* `ListingController`: work with vacancies (CRUD)
* `ApplicationController`: submission and deletion of applications
* `Controller`: basic controller with middleware

### Models

* `User`: user with roles
* `Listing`: job
* `Application`: job application
* `JobCategory`: job category
* `EmploymentType`: employment type

### Policies

* `ListingPolicy`: manages access rights to vacancies
* `ApplicationPolicy`: manages access rights to applications

### Components

* `JobCard`: component for displaying a job card

### Seeders

* `AdminUserSeeder`: creates an administrator (`admin@example.com`, password: `password123`)
* ``DatabaseSeeder``: sids for categories and employment types

##  Requirements

* PHP >= 8.1
* Laravel >= 10.x
* Database (e.g. MySQL)
* Node.js + NPM (for frontend, if used)

Creating an admin account is automatic thanks to cider.

##  Login

| Role | Email | Password |
| ----- | --------------------------------------------- | ----------- |
| Admin | [admin@example.com](mailto:admin@example.com) | password123 |

##  Note

This is only part of the project - only the files that have been manually modified are shown here. Blade templates, routes and migrations may be required for a full run.

---