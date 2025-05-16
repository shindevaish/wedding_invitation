// script.js

// Get the modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close-button")[0]; // Get the close button

// --- Select ALL enlargeable images ---
const enlargeableImages = document.querySelectorAll('.enlargeable-image');

// --- Add click listener to each enlargeable image ---
enlargeableImages.forEach(img => {
    img.onclick = function() {
        if (modal && modalImg && captionText) {
            modal.style.display = "flex"; 
            modalImg.src = this.src;   
            captionText.innerHTML = this.alt; 
        } else {
            console.error("Modal elements (modal, modalImg, or captionText) not found.");
        }
    }
});

// --- Event Listener for the Close Button (No changes needed) ---
if (span) { 
    span.onclick = function() {
        if (modal) {
            modal.style.display = "none";
        }
    }
} else {
    console.error("Modal close button element not found.");
}

// --- Event Listener to Close Modal on Background Click (No changes needed) ---
if (modal) { 
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
} else {
    console.error("Modal element with ID 'imageModal' not found.");
}


