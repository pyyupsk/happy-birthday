const surpriseBtn = document.getElementById('surpriseBtn');
const confettiContainer = document.getElementById('confettiContainer');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

surpriseBtn.addEventListener('click', () => {
  // Show modal
  modal.classList.remove('hidden');

  // Generate confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti z-50';
    confetti.style.top = Math.random() * 100 + 'vh';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.width = Math.random() * 10 + 'px';
    confetti.style.height = Math.random() * 10 + 'px';
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000); // Remove confetti after 5 seconds
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
