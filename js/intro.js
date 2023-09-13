document.addEventListener("DOMContentLoaded", () => {
    // Delay the button display by 3 seconds
    setTimeout(() => {
        const showButton = document.getElementById("showButton");
        showButton.style.display = "block";

        // Add an event listener to the button for navigation
        showButton.addEventListener("a", () => {
            // Redirect to the second.html page
            
        });
    }, 3000);
});
