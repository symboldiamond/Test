// This is the complete JavaScript code for your project.
// It handles the button click, audio playback, and the random
// animation of the background squares.

// --- 1. Element Selection ---
// Select the main containers and elements from your HTML.
const testButton = document.getElementById("test");
const wrapper = document.querySelector('.wrapper');

// Select the audio elements.
const clickSound = document.getElementById("clickSound");
const backgroundAudio = document.getElementById("backgroundAudio");
const playthis = document.getElementById("playthis");


// --- 2. Audio Functions and Event Listeners ---
// This function is called by the `onmouseover` attribute in your HTML.
function playAudio() {
  backgroundAudio.play();
}

// This event listener makes the `clickSound` play when the "test" button is clicked.
testButton.addEventListener("click", () => {
  if (!clickSound.paused) {
    clickSound.pause();
    clickSound.currentTime = 0;
  }
  clickSound.play();
});


// --- 3. Creating and Animating the Squares ---
// This section creates and animates the random squares.
const numSquares = 20; // You can adjust the number of squares here.

for (let i = 0; i < numSquares; i++) {
  const square = document.createElement('span');

  // Set the initial random animation delay to stagger the start.
  square.style.animationDelay = `${Math.random() * 30}s`;

  // Set initial random position for the square.
  // We use a negative value for `bottom` to hide them below the screen.
  square.style.left = `${Math.random() * 100}%`;
  square.style.bottom = `-${Math.random() * 90}%`;

  // Add the newly created square to the HTML wrapper.
  wrapper.appendChild(square);
  
  // Listen for the animation to repeat itself.
  // This event allows us to change the square's position on each new cycle.
  square.addEventListener('animationiteration', () => {
    // When the animation completes a full loop, reset the position
    // of the square to a new random location below the screen.
    square.style.left = `${Math.random() * 100}%`;
    square.style.bottom = `-${Math.random() * 80}%`;
  });
}