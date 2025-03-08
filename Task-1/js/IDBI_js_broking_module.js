document.addEventListener("DOMContentLoaded", function () {
    const featureButtons = document.querySelectorAll(".feature");
    const featureImages = document.querySelectorAll(".related-feature img");

    // Set first button and image as default active
    if (featureButtons.length > 0 && featureImages.length > 0) {
        featureButtons[0].classList.add("active");
        featureImages[0].classList.add("active");
    }

    featureButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons and images
            featureButtons.forEach(btn => btn.classList.remove("active"));
            featureImages.forEach(img => img.classList.remove("active"));

            // Add 'active' class to clicked button and related image
            this.classList.add("active");
            featureImages[index].classList.add("active");
        });
    });
});

const featureButtons = document.querySelectorAll(".feature");
const featureImages = document.querySelectorAll(".related-feature");

// Set first image as default active
featureImages[0].classList.add("active");

// Click event to toggle images
featureButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        // Remove active class from all images
        featureImages.forEach(feature => feature.classList.remove("active"));

        // Add active class to the clicked button's image
        featureImages[index].classList.add("active");
    });
});