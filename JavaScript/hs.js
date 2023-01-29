//BIO SLIDING AND FADE-IN TEXT//
// Select the text element
const navText = document.querySelector('.navbar-text');

// Add the 'visible' class to the text element when the page loads
window.onload = function() {
    navText.classList.add('visible');
};

// Create a function to handle the sliding effect
function slideBioText() {
    navText.style.transform = "translateX(0)";
}

// Call the slideText function after a delay of 2 seconds
setTimeout(slideBioText, 700);
//END OF BIO SLIDING AND FADE-IN TEXT//

const searchInput = document.getElementById("search-input");
const modImages = document.querySelectorAll(".modpngs");

searchInput.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    for (let i = 0; i < modImages.length; i++) {
        const altText = modImages[i].alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            modImages[i].style.display = "block";
        } else {
            modImages[i].style.display = "none";
        }
    }
});



