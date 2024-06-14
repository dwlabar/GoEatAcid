document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const headerHeight = document.querySelector('h1').offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - headerHeight;

  const squareSize = Math.min(viewportWidth / 20, viewportHeight / 20); // Ensure at least 10 rows and columns

  const numColumns = Math.floor(viewportWidth / squareSize);
  const numRows = Math.floor(viewportHeight / squareSize);

  grid.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);

    const tl = gsap.timeline({ paused: true });
    tl.to(square, { duration: 3, scale: -1.1, backgroundColor: '#e74c3c', ease: 'power1.inOut' });
    tl.to(square, { duration: 3, scale: 1, backgroundColor: '#3498db', ease: 'power1.inOut' });

    square.addEventListener('mouseenter', () => {
      tl.restart();
    });
  }
});

window.addEventListener('resize', () => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; // Clear existing squares
  const headerHeight = document.querySelector('h1').offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - headerHeight;

  const squareSize = Math.min(viewportWidth / 20, viewportHeight / 20); // Ensure at least 10 rows and columns

  const numColumns = Math.floor(viewportWidth / squareSize);
  const numRows = Math.floor(viewportHeight / squareSize);

  grid.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < numColumns * numRows; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);

    const tl = gsap.timeline({ paused: true });
    tl.to(square, { duration: 3, scale: -1.1, backgroundColor: '#e74c3c', ease: 'power1.inOut' });
    tl.to(square, { duration: 3, scale: 1, backgroundColor: '#3498db', ease: 'power1.inOut' });

    square.addEventListener('mouseenter', () => {
      tl.restart();
    });
  }
});
