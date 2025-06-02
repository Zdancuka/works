Here's the finished `README.md` file - just copy and paste it into the root of your repository:

---

```markdown
# 💻 PHP Web Exercises - Anna Zdancuka (az24095)

This repository contains several PHP exercises created for educational purposes. Each file demonstrates a different aspect of PHP, from basic output to forms and financial calculations.

## 📁 Contents

### `index.php`.
A simple page that outputs:
```

Hello from php

```

---

### `part2.php`.
Generates a numeric triangle in text format.  
Takes a `rows` parameter via URL, e.g.:

```

part2.php?rows=5

```

Outputs a pyramid of the form:
```

```
1 
```

1 2
1 2 3
1 2 3 4
1 2 3 4 5

```

---

### `part3.php`.
The `mounthly_paiment_count()` function calculates the monthly loan payment using the annuity formula.

Formula:
```

M = P \* (i(1 + i)^n) / ((1 + i)^n - 1)

````
Where:
- `P` - loan amount
- `i` - monthly interest rate
- `n` - number of months

The file contains several tests of the function and outputs the results.

---

### `part4_input.html` and `part4_result.php`
Form for entering loan parameters:
- Loan amount
- Annual interest rate
- Loan term in years

After submitting the data, `part4_result.php`:
- Checks if the entered values are correct
- Outputs the monthly payment amount
- Generates a **payment schedule** with a breakdown of principal and interest for each month

Example of use:
1. Open `part4_input.html` in a browser
2. Enter values and submit the form
3. The results will appear as a text report

---

## ▶️ How to run

1. Clone the repository

2. Start the inbuilt PHP server:

   ```bash
   php -S localhost:8000
   ```

3. open your browser and go to the following addresses:

   * [http://localhost:8000/index.php](http://localhost:8000/index.php)
   * [http://localhost:8000/part2.php?rows=5](http://localhost:8000/part2.php?rows=5)
   * [http://localhost:8000/part3.php](http://localhost:8000/part3.php)
   * [http://localhost:8000/part4\_input.html](http://localhost:8000/part4_input.html)

