document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const headerHeight = document.querySelector('h1').offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - headerHeight;

  const squareSize = Math.min(viewportWidth / 20, viewportHeight / 20);

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

    const triggerAnimation = () => tl.restart();

    square.addEventListener('mouseenter', triggerAnimation);
    square.addEventListener('touchstart', (e) => {
      e.preventDefault();
      triggerAnimation();
    });
  }

  // Handle touch move events
  grid.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (touchedElement && touchedElement.classList.contains('square')) {
      const tl = gsap.timeline({ paused: true });
      tl.to(touchedElement, { duration: 3, scale: -1.1, backgroundColor: '#e74c3c', ease: 'power1.inOut' });
      tl.to(touchedElement, { duration: 3, scale: 1, backgroundColor: '#3498db', ease: 'power1.inOut' });
      tl.restart();
    }
  });
});

window.addEventListener('resize', () => {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  const headerHeight = document.querySelector('h1').offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - headerHeight;

  const squareSize = Math.min(viewportWidth / 20, viewportHeight / 20);

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

    const triggerAnimation = () => tl.restart();

    square.addEventListener('mouseenter', triggerAnimation);
    square.addEventListener('touchstart', (e) => {
      e.preventDefault();
      triggerAnimation();
    });
  }

  // Handle touch move events
  grid.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (touchedElement && touchedElement.classList.contains('square')) {
      const tl = gsap.timeline({ paused: true });
      tl.to(touchedElement, { duration: 3, scale: -1.1, backgroundColor: '#e74c3c', ease: 'power1.inOut' });
      tl.to(touchedElement, { duration: 3, scale: 1, backgroundColor: '#3498db', ease: 'power1.inOut' });
      tl.restart();
    }
  });
});
