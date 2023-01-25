//BIO SLIDING AND FADE-IN TEXT//
// Select the text element
const text = document.querySelector('.bio-text');

// Add the 'visible' class to the text element when the page loads
window.onload = function() {
    text.classList.add('visible');
};

// Create a function to handle the sliding effect
function slideText() {
    text.style.transform = "translateX(0)";
}

// Call the slideText function after a delay of 2 seconds
setTimeout(slideText, 700);
//END OF BIO SLIDING AND FADE-IN TEXT//