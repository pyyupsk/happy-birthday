/**
 * DOM elements
 */
const surpriseBtn = document.getElementById("surpriseBtn"); // Button to trigger the surprise
const confettiContainer = document.getElementById("confettiContainer"); // Container for the confetti
const modal = document.getElementById("modal"); // Modal element
const closeBtn = document.getElementById("closeBtn"); // Button to close the modal

/**
 * Creates a confetti element
 * @returns {HTMLElement} - The confetti element
 */
const createConfetti = () => {
  const confetti = document.createElement("div");
  confetti.className = "confetti z-50";
  confetti.style.top = `${Math.random() * 100}vh`;
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.width = `${Math.random() * 10}px`;
  confetti.style.height = `${Math.random() * 10}px`;
  confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
  return confetti;
};

/**
 * Event listener for the surprise button.
 * When clicked, shows the modal with confetti and clears the confetti after 10 seconds.
 */
surpriseBtn.addEventListener("click", () => {
  modal.classList.remove("hidden"); // Show the modal

  const confettiFrag = document.createDocumentFragment(); // Fragment to hold the confetti elements
  for (let i = 0; i < 100; i++) {
    confettiFrag.appendChild(createConfetti()); // Create and append confetti elements to the fragment
  }
  confettiContainer.appendChild(confettiFrag); // Append the fragment to the confetti container

  setTimeout(() => {
    confettiContainer.innerHTML = ""; // Clear the confetti container after 10 seconds
  }, 10000);
});

/**
 * Event listener for the close button.
 * When clicked, hides the modal.
 */
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide the modal
});
