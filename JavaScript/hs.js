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


//REDUCE IMG SIZE//
if ( window.innerWidth <= 767 ) {
    var itTakesTwo = document.querySelector(".modpngs.itTakesTwo");
    var noTime = document.querySelector(".modpngs.noTime");
    var projectWinter = document.querySelector(".modpngs.projectWinter");
    itTakesTwo.src = "pngs/130/itt-130.webp";
    noTime.src = "pngs/130/nttrl-130.webp";
    projectWinter.src = "pngs/130/pjwt-130.webp";
}