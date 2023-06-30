const fileNames = [
    'ab-testing.png',
    'about-us.png',
    'add-products.png',
    'being-creative.png',
    'bring-solutions.png',
    'business-deal.png',
    'charts.png',
    'clickbait.png',
    'coding.png',
    'coming-soon.png',
    'design-thinking.png',
    'downloading.png',
    'fixing-bugs.png',
    'get-inspired.png',
    'gifting-online.png',
    'illustrator-drawing.png',
    'interface-testing.png',
    'investing.png',
    'listening-feedback.png',
    'loading.png',
    'modular-coding.png',
    'newsletter.png',
    'office-desk.png',
    'page-under-construction.png',
    'payment-with-card.png',
    'protect-privacy.png',
    'searching.png',
    'share.png',
    'social-media.png',
    'success.png',
    'trophy-awards.png',
    'video-conference.png',
    'we-are-hiring.png',
    'welcome.png',
    'work-from-home.png'
    // Add more image file names here
];

const imageList = document.querySelector('.dropdown-icon .imageList');
const selectedImageContainer = document.querySelector('.selected-image-container');

fileNames.forEach(fileName => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = 'img/' + fileName;
    img.alt = fileName.substring(0, fileName.lastIndexOf('.'));
    img.addEventListener('click', () => {
        selectImage(img.src, img.alt);
    });
    listItem.appendChild(img);
    imageList.appendChild(listItem);
});

function selectImage(src, alt) {
    const selectedImage = document.createElement('img');
    selectedImage.src = src;
    selectedImage.alt = alt;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        deleteImage(selectedImage);
    });

    selectedImageContainer.innerHTML = '';
    selectedImageContainer.appendChild(selectedImage);
    selectedImageContainer.appendChild(deleteButton);
}

function deleteImage(image) {
    selectedImageContainer.innerHTML = '';
}

function toggleDropdown() {
const dropdownSelect = document.querySelector('.dropdown-icon .select');
const dropdownMenu = document.getElementById('selectIcon');
dropdownSelect.classList.toggle('active');
dropdownMenu.classList.toggle('show');
}