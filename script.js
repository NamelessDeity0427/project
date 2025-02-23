 // Create twinkling stars
 function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 1 + 's';
    document.body.appendChild(star);
  }
}

// Spawn a single falling star with tail
function spawnFallingStar() {
  const star = document.createElement('div');
  star.className = 'falling-star';
  
  // Random starting position at the top half of the viewport
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.5;
  star.style.left = startX + 'px';
  star.style.top = startY + 'px';
  
  // Random animation duration between 1 and 2.5 seconds
  const duration = Math.random() * 1.5 + 1;
  star.style.animationDuration = duration + 's';
  
  // Random fall distance between 300 and 600 pixels
  const distance = Math.random() * 300 + 300;
  star.style.setProperty('--fall-distance', distance + 'px');
  
  document.body.appendChild(star);
  
  // Remove the star after its animation completes
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
  
  // Spawn the next falling star after a random delay between 1 and 3 seconds
  setTimeout(spawnFallingStar, Math.random() * 2000 + 1000);
}

// Initialize animations after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  spawnFallingStar();
});