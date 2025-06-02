<?php
// Set content type to text/plain
header("Content-Type: text/plain");

// Include the part3.php file to access the function
include 'part3.php';

// Check if the form was submitted and validate input
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values from the form
    $loan_amount = isset($_POST['loan_amount']) ? filter_var($_POST['loan_amount'], FILTER_VALIDATE_FLOAT) : false;
    $annual_interest_rate = isset($_POST['annual_interest_rate']) ? filter_var($_POST['annual_interest_rate'], FILTER_VALIDATE_FLOAT) : false;
    $loan_term_years = isset($_POST['loan_term_years']) ? filter_var($_POST['loan_term_years'], FILTER_VALIDATE_INT) : false;

    if ($loan_amount === false || $annual_interest_rate === false || $loan_term_years === false ||
     $loan_amount <= 0 || $annual_interest_rate <= 0 || $loan_term_years <= 0) {
        die("Error: Invalid input. Ensure values are positive numbers and the term is a valid integer.");
    }

    // Display the input values for the user
    echo "\n";


    // Calculate the monthly payment using the function from part3.php
    $monthly_payment = mounthly_paiment_count($loan_amount, $annual_interest_rate, $loan_term_years);
    echo "Monthly Payment: $monthly_payment\n";

    // Generate and print the loan payment schedule
    $remaining_amount = $loan_amount;
    $monthly_interest_rate = ($annual_interest_rate / 100) / 12;

    echo "\nMonthly Payment Schedule:\n";
    for ($month = 1; $month <= $loan_term_years * 12; $month++) {
        
        // Calculate interest payment for this month
        $interest_payment = $remaining_amount * $monthly_interest_rate;
        // Calculate principal payment
        $principal_payment = $monthly_payment - $interest_payment;
        // Reduce the remaining loan amount by the principal payment
        $remaining_amount -= $principal_payment;
        if ($remaining_amount<0) { $interest_payment = $interest_payment - $remaining_amount;
            $remaining_amount = 0;
        }

        // Print the month number, remaining loan amount, interest payment, and principal payment
        echo "Month $month: Remaining Loan = $remaining_amount, Interest Payment = $interest_payment, Principal Payment = $principal_payment\n";
    }
}
?>

