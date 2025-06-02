window.onload = function () {
    var booksContainer = document.getElementById("books"); // Get the container for displaying books

    // Function to render all books
    function renderBooks() {
        // Clear the container to avoid duplication
        booksContainer.innerHTML = '';

        // Iterate through books and create a card for each
        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            var bookCard = document.createElement('div');
            bookCard.classList.add('responsive');

            // Avoid template literals for ES5 compatibility
            bookCard.innerHTML =
                '<div class="img">' +
                '<img src="' + book.image + '" alt="' + book.title + '">' +
                '</div>' +
                '<div class="desc">' +
                '<div class="product-category" title="' + book.categor + '">' + book.categor + '</div>' +
                '<div class="product-title">' + book.title + '</div>' +
                '<div class="product-author">' + book.author.name + '</div>' +
                '<div class="year">' + book.publication_year + ' y.</div>' +
                '</div>';
            booksContainer.appendChild(bookCard);
        }
    }

    // Form validation function
    function validateForm(title, author, category, year) {
        var valid = true;

        // Title validation
        if (!title) {
            document.getElementById("titleError").innerText = "Title is required.";
            document.getElementById("titleError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("titleError").style.display = "none";
        }

        // Author validation
        if (!author) {
            document.getElementById("authorError").innerText = "Author is required.";
            document.getElementById("authorError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("authorError").style.display = "none";
        }

        // Year validation (number and range check)
        if (!year || isNaN(year) || year < 1 || year > new Date().getFullYear()) {
            document.getElementById("yearError").innerText = "Please enter a valid year.";
            document.getElementById("yearError").style.display = "block";
            valid = false;
        } else {
            document.getElementById("yearError").style.display = "none";
        }

        return valid;
    }

    // Form submission handler
    var bookForm = document.getElementById("bookForm");
    bookForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        var category = document.getElementById("category").value;
        var year = document.getElementById("year").value;
        var image = document.getElementById("image").value;

        // Validate the form inputs
        if (validateForm(title, author, category, year)) {
            // If the form is valid, create a new book object
            var newBook = {
                title: title,
                category: category,
                publication_year: parseInt(year),
                author: { name: author },
                image: image || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            };

            // Add the new book to the array
            books.push(newBook);

            // Re-render the book list
            renderBooks();

            // Reset the form fields
            bookForm.reset();
        }
    });

    // Initial rendering of the book list
    renderBooks();

    // jQuery code for hiding and showing the table when clicking the header
    $(document).ready(function () {
        // Initially hide the table
        $("table").hide();

        // Toggle the visibility of the table when the "Website Author Information" heading is clicked
        $("h2:contains('Website author information ↓')").click(function () {
            $("table").toggle(); // This will either show or hide the table
        });
    });

};