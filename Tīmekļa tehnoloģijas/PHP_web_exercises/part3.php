<?php
function mounthly_paiment_count($loan_amount, $annual_interest_rate, $loan_term_years)
{
    if (($loan_amount <= 0) or ($annual_interest_rate <= 0) or ($loan_term_years <= 0))
        return " ! - One of the values are less than expected - ! ";

    $i = ( $annual_interest_rate / 100) / 12;
    $n = $loan_term_years * 12;

    $monthlyPayment = ($loan_amount * $i * pow(1 + $i, $n)) / (pow(1 + $i, $n) - 1);

    return $monthlyPayment;
}

$tests = [
    [5, 6, 6], 
    [10, 100, 10],
    [50000, 7, 15],
    [100000, 4.5, 30]
];


    list($loan, $rate, $term) = $test;
    print "Loan: $$loan, Interest: $rate%, Term: $term years → Monthly Payment: $ " . mounthly_paiment_count($loan, $rate, $term) . ' <br>';

?>