// Execute the script when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const gallery = document.getElementById('gallery');
    const allFilter = document.getElementById('allFilter');
    const natureFilter = document.getElementById('natureFilter');
    const cityFilter = document.getElementById('cityFilter');
    const abstractFilter = document.getElementById('abstractFilter');
    const sortBy = document.getElementById('sortBy');
    const imageForm = document.getElementById('imageForm');
    const imageUrlInput = document.getElementById('imageUrl');
    const imageNameInput = document.getElementById('imageName');
    const imageCategoryInput = document.getElementById('imageCategory');
    const urlError = document.getElementById('urlError');
    const nameError = document.getElementById('nameError');
    const categoryError = document.getElementById('categoryError');

    let images = []; // Array to store image data

    // Function to create an image element
    function createImageElement(imageData) {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');

        const img = document.createElement('img');
        img.src = imageData.url;
        img.alt = imageData.name;
        img.classList.add('gallery-image');
        imageItem.appendChild(img);

        const imageInfo = document.createElement('p');
        imageInfo.textContent = `${imageData.name} - ${imageData.category} - Added: ${imageData.date}`;
        imageItem.appendChild(imageInfo);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeImage(imageData));
        imageItem.appendChild(removeButton);

        return imageItem;
    }

    // Function to render images to the gallery
    function renderGallery(filter = 'All') {
        gallery.innerHTML = ''; // Clear the gallery
        const filteredImages = filter === 'All' ? images : images.filter(image => image.category === filter);

        filteredImages.forEach(image => {
            const imageElement = createImageElement(image);
            gallery.appendChild(imageElement);
        });
    }

    // Function to validate the form
    function validateForm() {
        let valid = true;

        // Clear previous error messages
        urlError.textContent = '';
        nameError.textContent = '';
        categoryError.textContent = '';

        // Validate Image URL
        const urlRegex = /\.(jpg|png|gif|svg)$/i;
        if (!urlRegex.test(imageUrlInput.value.trim())) {
            valid = false;
            urlError.textContent = 'Please enter a valid image URL (e.g., .jpg, .png, .gif, .svg).';
        }

        // Validate Image Name
        if (imageNameInput.value.trim() === '') {
            valid = false;
            nameError.textContent = 'Image Name cannot be empty.';
        }

        // Validate Category
        if (imageCategoryInput.value === '') {
            valid = false;
            categoryError.textContent = 'Please select a category.';
        }

        return valid;
    }

    // Function to add an image
    imageForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        if (!validateForm()) return; // Stop processing if validation fails

        const imageData = {
            url: imageUrlInput.value.trim(),
            name: imageNameInput.value.trim(),
            category: imageCategoryInput.value,
            date: new Date().toLocaleString()
        };

        images.push(imageData); // Add the image data to the array
        renderGallery(); // Render the updated gallery
        imageForm.reset(); // Reset the form
    });

    // Function to remove an image
    function removeImage(imageData) {
        images = images.filter(image => image !== imageData);
        renderGallery();
    }

    // Filter buttons
    allFilter.addEventListener('click', () => renderGallery('All'));
    natureFilter.addEventListener('click', () => renderGallery('Nature'));
    cityFilter.addEventListener('click', () => renderGallery('City'));
    abstractFilter.addEventListener('click', () => renderGallery('Abstract'));

    // Sorting functionality
    sortBy.addEventListener('change', () => {
        const sortValue = sortBy.value;

        switch (sortValue) {
            case 'nameAsc':
                images.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                images.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'dateAsc':
                images.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'dateDesc':
                images.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }

        renderGallery();
    });
});
