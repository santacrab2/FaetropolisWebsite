// script.js

// Get the image element
const movingImage = document.getElementById('fairyrender');
const movingJar = document.getElementById('faetropolisjar');

const targetX = movingJar.offsetLeft - movingImage.offsetLeft;
let currentX = 0;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Calculate the new position for the image
    // In this example, we move the image vertically (Y-axis) 
    // by a fraction of the scroll amount (e.g., half the speed)
    const yPosition = scrollTop; // You can adjust the 0.5 multiplier to control the speed

    // Apply the new position using CSS transform for performance
    movingJar.style.transform = `translateY(${yPosition}px)`;
    currentX = Math.max(-scrollTop * 0.75, targetX); // Adjust 0.5 to control speed
    movingImage.style.transform = `translateX(${currentX}px) translateY(${yPosition}px)`;
});

