<?php
header('Content-Type: text/plain; charset=utf-8');
//Anna Zdancuka az24095
$rows = isset($_GET['rows']) ? (int)$_GET['rows'] : 5;


if ($rows <= 0) {
    die("Please enter a valid positive integer for rows.\n");
}

for ($i=1; $i <= $rows; $i++){
    echo str_repeat(" ", ($rows - $i));
    for ($j = 1; $j <= $i; $j++) {
    echo $j, " ";
    }
    echo "\n";
}
