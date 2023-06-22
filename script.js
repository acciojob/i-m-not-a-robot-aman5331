//your JS code here. If required.
// Array of image URLs
const imageUrls = [
  'url1.jpg',
  'url2.jpg',
  'url3.jpg',
  'url4.jpg',
  'url5.jpg',
  'url6.jpg'
];

// Function to shuffle the array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to render the images with shuffled URLs and assign event listeners
function renderImages() {
  const imageElements = document.querySelectorAll('img');
  const classNames = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

  // Shuffle the image URLs and assign to the image elements
  shuffleArray(imageUrls);
  imageElements.forEach((element, index) => {
    element.src = imageUrls[index];
    element.className = classNames[index];
  });

  // Reset button
  const resetButton = document.getElementById('reset');
  resetButton.style.display = 'none'; // Initially hidden

  // Verify button
  const verifyButton = document.getElementById('verify');
  verifyButton.style.display = 'none'; // Initially hidden

  // Message paragraph
  const para = document.getElementById('para');
  para.textContent = ''; // Empty initially

  // Click counter
  let clickCount = 0;

  // Selected image class name
  let selectedImageClass = '';

  // Image click event listener
  function imageClickHandler(event) {
    const clickedImage = event.target;
    const clickedImageClass = clickedImage.className;

    // Ignore clicks on the same image
    if (selectedImageClass === clickedImageClass) {
      return;
    }

    clickCount++;
    selectedImageClass = clickedImage

