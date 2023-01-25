//BIO SLIDING AND FADE-IN TEXT//
// Select the text element
const bioText = document.querySelector('.bio-text');

// Add the 'visible' class to the text element when the page loads
window.onload = function() {
    bioText.classList.add('visible');
};

// Create a function to handle the sliding effect
function slideBioText() {
    bioText.style.transform = "translateX(0)";
}

// Call the slideText function after a delay of 2 seconds
setTimeout(slideBioText, 700);
//END OF BIO SLIDING AND FADE-IN TEXT//
