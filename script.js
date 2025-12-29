// script.js

// Get the image element
const movingImage = document.getElementById('fairyrender');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate the new position for the image
    // In this example, we move the image vertically (Y-axis) 
    // by a fraction of the scroll amount (e.g., half the speed)
    const yPosition = scrollTop; // You can adjust the 0.5 multiplier to control the speed
    
    // Apply the new position using CSS transform for performance
    movingImage.style.transform = `translateY(${yPosition}px)`;
});

