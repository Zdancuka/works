//Anna Zdancuka az24095
window.addEventListener('DOMContentLoaded', (event) => {
    let genreLookup = {};
    let nationalityLookup = {};

    // Populate the unique genres and author nationalities
    books.forEach(book => {
        if (book.genre && !(book.genre in genreLookup)) {
            genreLookup[book.genre] = 1;
        }
        if (book.author) {
            if (Array.isArray(book.author)) {
                book.author.forEach(author => {
                    if (author.nationality && !(author.nationality.toLowerCase() in nationalityLookup)) {
                        nationalityLookup[author.nationality.toLowerCase()] = 1;
                    }
                });
            } else if (book.author.nationality && !(book.author.nationality.toLowerCase() in nationalityLookup)) {
                nationalityLookup[book.author.nationality.toLowerCase()] = 1;
            }
        }
    });

    // Sort the genres and nationalities
    const genres = Object.keys(genreLookup).sort();
    const nationalities = Object.keys(nationalityLookup).sort();

    // Fill the genre select dropdown
    const genreSelect = document.getElementById('genre-list');
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });

    // Fill the nationality select dropdown
    const nationalitySelect = document.getElementById('country-list');
    nationalities.forEach(nat => {
        const option = document.createElement('option');
        option.value = nat;
        option.textContent = nat;
        nationalitySelect.appendChild(option);
    });

    // Add event listener for the Show button
    const showButton = document.getElementById('show');

    // Filter books based on all selected criteria
    function filterBooks() {
        const genre = document.getElementById('genre-list').value;
        const country = document.getElementById('country-list').value;
        const yearFrom = document.getElementById('publication-year-from').value;
        const yearUntil = document.getElementById('publication-year-until').value;
        const availableOnly = document.getElementById('available').checked;
        const searchTerm = document.getElementById('search').value.trim().toLowerCase();
        const includeAuthorInfo = document.getElementById('author-info').checked;

        // Validation for year range
        let isValid = true;
        let errorMessage = '';

        if (yearFrom && (!Number.isInteger(Number(yearFrom)) || Number(yearFrom) <= 0 || Number(yearFrom) > 2024)) {
            isValid = false;
            errorMessage = 'Please enter a valid positive number for "From" year (1-2024).';
        } else if (yearUntil && (!Number.isInteger(Number(yearUntil)) || Number(yearUntil) <= 0 || Number(yearUntil) > 2024)) {
            isValid = false;
            errorMessage = 'Please enter a valid positive number for "Until" year (1-2024).';
        } else if (yearFrom && yearUntil && Number(yearFrom) > Number(yearUntil)) {
            isValid = false;
            errorMessage = '"From" year should not be greater than "Until" year.';
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // Filter books based on all selected criteria
        const filteredBooks = books.filter(book => {
            const matchesGenre = !genre || book.genre === genre;
        
            // Обработка фильтра по национальности
            const matchesNationality = !country || (
                Array.isArray(book.author) 
                    ? book.author.some(author => author.nationality.toLowerCase() === country.toLowerCase()) 
                    : book.author.nationality.toLowerCase() === country.toLowerCase()
            );
        
            const matchesYearRange = (yearFrom === '' || book.publication_year >= Number(yearFrom)) && 
                                     (yearUntil === '' || book.publication_year <= Number(yearUntil));
            const matchesAvailability = !availableOnly || book.available_copies > 0;
        
            // Поиск: проверяем, что строка входит в название книги или имя автора
            const matchesSearch = !searchTerm || book.title.toLowerCase().includes(searchTerm) || 
                (Array.isArray(book.author) 
                    ? book.author.some(author => author.name.toLowerCase().includes(searchTerm)) 
                    : book.author.name.toLowerCase().includes(searchTerm));
        
            return matchesGenre && matchesNationality && matchesYearRange && matchesAvailability && matchesSearch;
        });
        

        // Update the table with the filtered books
        updateBookTable(filteredBooks, includeAuthorInfo);
    }

    // Add event listener for the search box
    const searchBox = document.getElementById('search');
    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.trim().toLowerCase();
        
        // Only search if the term is at least 3 characters long
        if (searchTerm.length >= 3 || searchTerm.length === 0) {
            filterBooks();
        }
    });

    // Add event listener for the Show button
    if (showButton) {
        showButton.addEventListener('click', filterBooks);
    } else {
        console.error('Show button not found.');
    }
});

// Function to update the table with filtered books
function updateBookTable(filteredBooks, includeAuthorInfo) {
    const table = document.querySelector('table');
    table.innerHTML = '';

    const headerRow = document.createElement('tr');
    const headers = ['Title', 'Published', 'Genre', 'ISBN', 'Total copies/available copies'];

    // Add 'Authors' column if includeAuthorInfo is true
    if (includeAuthorInfo) {
        headers.splice(1, 0, 'Authors'); // Insert 'Authors' column after 'Title'
    }

    // Create table headers dynamically
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate table rows with filtered book data
    filteredBooks.forEach(book => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);
        
        // Add authors column if needed
        if (includeAuthorInfo) {
            const authorCell = document.createElement('td');
            if (book.author.name) {
                authorCell.textContent = `${book.author.name} (${book.author.nationality}, ${book.author.birth_year}${book.author.death_year ? '-' + book.author.death_year : ''})`;
            } else {
                book.author.forEach((author, index) => {
                    authorCell.textContent += `${author.name} (${author.nationality}, ${author.birth_year}${author.death_year ? '-' + author.death_year : ''})`;
                    if (index < book.author.length - 1) authorCell.textContent += ', ';
                });
            }
            row.appendChild(authorCell);
        }

        const yearCell = document.createElement('td');
        yearCell.textContent = book.publication_year;
        row.appendChild(yearCell);

        const genreCell = document.createElement('td');
        genreCell.textContent = book.genre;
        row.appendChild(genreCell);

        const isbnCell = document.createElement('td');
        isbnCell.textContent = book.isbn;
        row.appendChild(isbnCell);

        const copiesCell = document.createElement('td');
        copiesCell.textContent = `${book.total_copies}/${book.available_copies}`;
        row.appendChild(copiesCell);

        table.appendChild(row);
    });
}
