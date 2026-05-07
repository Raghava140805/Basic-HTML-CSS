// --- Menu Toggle Functionality ---
const menubtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menubtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// --- Event Handling Examples ---
// For testing these, open your browser, right-click, select "Inspect", 
// and go to the "Console" tab to see the logs.

// 1. Mouse Events
menubtn.addEventListener("dblclick", () => console.log("Mouse: Double Clicked"));
menubtn.addEventListener("mousedown", () => console.log("Mouse: Down"));
menubtn.addEventListener("mouseup", () => console.log("Mouse: Up"));
menubtn.addEventListener("mousemove", (e) => console.log(`Mouse: Moving at X:${e.clientX}, Y:${e.clientY}`));
menubtn.addEventListener("mouseover", () => console.log("Mouse: Over"));
menubtn.addEventListener("mouseout", () => console.log("Mouse: Out"));
menubtn.addEventListener("mouseenter", () => console.log("Mouse: Enter"));
menubtn.addEventListener("mouseleave", () => console.log("Mouse: Leave"));
menubtn.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Disables default right-click menu
    console.log("Mouse: Context Menu (Right Click)");
});
menubtn.addEventListener("wheel", () => console.log("Mouse: Wheel Scrolled"));

// 2. Keyboard Events
// Keyboard events are attached to the window so they work anywhere on the page
window.addEventListener("keydown", (e) => console.log(`Keyboard: Key Down - ${e.key}`));
window.addEventListener("keyup", (e) => console.log(`Keyboard: Key Up - ${e.key}`));
window.addEventListener("keypress", (e) => console.log(`Keyboard: Key Press - ${e.key}`));