// Function to display an error message in the error box
function showError(message) {
    document.getElementById("errorMessage").innerText = message; // Set error message text
    document.getElementById("errorBox").style.display = "block"; // Show the error box
}

// Function to close (hide) the error box
function closeErrorBox() {
    document.getElementById("errorBox").style.display = "none"; // Hide the error box
}

// Function to hide an alert message after 4 seconds
function hideAlertMessage(alertElement) {
    setTimeout(() => {
        if (alertElement) {
            alertElement.classList.remove("show"); // Remove the "show" class to hide the alert
        }
    }, 4000); // Delay of 4 seconds
}

// Event listener for the login button click event
document.getElementById("loginBtn").addEventListener("click", function () {
    const phoneNumber = document.getElementById("phoneNumber").value; // Get the entered phone number
    const captcha = document.getElementById("captchaCheckbox"); // Get captcha checkbox element
    const errorContent = document.getElementById("error-content"); // Get error content element
    const captchaAlert = document.querySelector(".auth-alert"); // Get the alert message container

    // Check if captcha is checked
    if (captcha.checked) {
        console.log('checked'); // Log for debugging
    } else {
        errorContent.textContent = 'Please select captcha'; // Set error message
        captchaAlert.classList.add("show"); // Show alert message
        hideAlertMessage(captchaAlert); // Hide the alert message after 4 seconds
        return; // Stop further execution
    }

    // Validate phone number
    if (!phoneNumber || phoneNumber.length !== 10) {
        errorContent.textContent = 'Please enter valid phone number'; // Set error message
        captchaAlert.classList.add("show"); // Show alert message
        hideAlertMessage(captchaAlert); // Hide the alert message after 4 seconds
        return; // Stop further execution
    }
});

// Event listener for changes in the captcha checkbox
document.getElementById("captchaCheckbox").addEventListener("change", function () {
    let verifiedText = document.querySelector(".verified"); // Get the element that shows verification status
    if (this.checked) {
        verifiedText.style.display = "inline"; // Show verified text when checked
    } else {
        verifiedText.style.display = "none"; // Hide verified text when unchecked
    }
});