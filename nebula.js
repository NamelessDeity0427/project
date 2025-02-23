 
 const images = [
    'https://stsci-opo.org/STScI-01H82G1P61JMNCENZ6S3D6AGHQ.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOX1rfgncWl1Y_P5ciEFopgJnCGU-7A8xlA&s',
    'https://www.nasa.gov/wp-content/uploads/2023/03/64884main_image_feature_211_jwfull.jpg',
    'https://cdn.mos.cms.futurecdn.net/nbaR6JXZ3Z7mzuW9bh4nQN-1200-80.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAoBAfziaZ3lddPZF6U7eyoV0lfBSW3y05Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbPdSHKq4veCGA2tqtFuyP9Du1oSi6N3cWw&s',
    'https://cdn.esahubble.org/archives/images/thumb700x/heic1501a.jpg',
    'https://cdn.esahubble.org/archives/images/thumb700x/heic1608a.jpg',
    'https://cdn.esahubble.org/archives/images/thumb700x/potw1933a.jpg',
    'https://cdn.esahubble.org/archives/images/thumb700x/heic1518a.jpg'
  ];

  // Function to create floating images
  function spawnFloatingImages() {
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'floating-image';

      // Add click event to open modal
      img.addEventListener('click', function() {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
      });

      // Random starting position within the viewport
      const startX = Math.random() * (window.innerWidth - 150);
      const startY = Math.random() * (window.innerHeight - 150);
      img.style.left = startX + 'px';
      img.style.top = startY + 'px';
      
      // Random animation duration between 4 and 8 seconds
      const duration = Math.random() * 4 + 4;
      img.style.animationDuration = duration + 's';
      
      // Random offset values for the floating effect (range: -50px to 50px)
      const offsetX = (Math.random() - 0.5) * 100 + 'px';
      const offsetY = (Math.random() - 0.5) * 100 + 'px';
      img.style.setProperty('--offset-x', offsetX);
      img.style.setProperty('--offset-y', offsetY);
      
      document.body.appendChild(img);
    });
  }

  // Function to create twinkling stars
  function createStars() {
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2 + 1; // Star size between 1 and 3px
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(star);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    spawnFloatingImages();
    createStars();
  });