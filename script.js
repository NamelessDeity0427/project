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
  const starfield = document.querySelector('.starfield');
  const star = document.createElement('div');
  star.className = 'falling-star';
  
  // Random starting position within viewport
  const startX = Math.random() * (window.innerWidth - 80); // Account for tail width
  const startY = Math.random() * (window.innerHeight * 0.5); // Top half of viewport
  star.style.left = startX + 'px';
  star.style.top = startY + 'px';
  
  // Random animation duration between 1 and 2.5 seconds
  const duration = Math.random() * 1.5 + 1;
  star.style.animationDuration = duration + 's';
  
  // Fall distance limited to stay within viewport
  const maxFallDistance = window.innerHeight - startY; // Ensure it doesn’t exceed bottom
  const distance = Math.min(Math.random() * 300 + 300, maxFallDistance);
  star.style.setProperty('--fall-distance', distance + 'px');
  
  starfield.appendChild(star); // Append to starfield, not body
  
  // Remove the star after its animation completes
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
  
  // Spawn the next falling star after a random delay
  setTimeout(spawnFallingStar, Math.random() * 2000 + 1000);
}

// Rocket movement
let rocketX = 0;
let rocketY = 0;
let velocityX = 0;
let velocityY = 0;
const speed = 2;

function initRocket() {
  const rocket = document.querySelector('.flying-rocket');
  const rect = rocket.getBoundingClientRect();
  rocketX = Math.random() * (window.innerWidth - rect.width);
  rocketY = Math.random() * (window.innerHeight - rect.height);
  velocityX = (Math.random() - 0.5) * speed * 2;
  velocityY = (Math.random() - 0.5) * speed * 2;
  rocket.style.left = rocketX + 'px';
  rocket.style.top = rocketY + 'px';
}

function updateRocket() {
  const rocket = document.querySelector('.flying-rocket');
  const rect = rocket.getBoundingClientRect();
  rocketX += velocityX;
  rocketY += velocityY;
  
  if (rocketX < 0 || rocketX > window.innerWidth - rect.width) {
    velocityX = -velocityX;
  }
  if (rocketY < 0 || rocketY > window.innerHeight - rect.height) {
    velocityY = -velocityY;
  }
  
  rocket.style.left = rocketX + 'px';
  rocket.style.top = rocketY + 'px';
  
  const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
  rocket.style.transform = `rotate(${angle}deg)`;
  
  if (Math.random() < 0.01) {
    velocityX = (Math.random() - 0.5) * speed * 2;
    velocityY = (Math.random() - 0.5) * speed * 2;
  }
  
  requestAnimationFrame(updateRocket);
}

// Initialize animations after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  spawnFallingStar();
  initRocket();
  updateRocket();
});
