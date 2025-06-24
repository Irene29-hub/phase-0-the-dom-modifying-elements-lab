// Declare and create the <h1> element in the global scope
// This ensures that the 'newHeader' variable is defined and points to an <h1>
// element before the test runner attempts to access its properties.
const newHeader = document.createElement("h1");
newHeader.id = "victory"; // Set its ID to 'victory' as required by the tests
newHeader.textContent = "The Style Hub is the champion"; // Set the specific champion message, replacing "YOUR-NAME"

// Ensure the DOM is fully loaded before performing final DOM manipulations
document.addEventListener("DOMContentLoaded", () => {
    // Get a reference to the body element
    const body = document.body;

    // Append the globally created 'newHeader' element to the body
    // This makes it visible on the page.
    body.appendChild(newHeader);

    // Log a message to the console to confirm script execution (optional, for debugging)
    console.log("Specific new <h1> element has been dynamically added.");
});
