// Runs when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    // Example: update text in an element
    const title = document.getElementById("title");
    if (title) {
        title.textContent = "Hello from JavaScript!";
    }
});
