/**
 * Fun and Soothing Animation Grid Toy
 * 
 * Description:
 * This script creates an interactive grid of squares that animate when the 
 * user hovers or touches them.
 * 
 * It is designed to work seamlessly on both desktop and mobile devices, 
 * providing a fun and relaxing
 * experience. Users can tap and drag across the screen to trigger animations, 
 * making it both engaging and soothing.
 * 
 * Features:
 * - Dynamically generates a grid of squares based on the viewport size.
 * - Squares animate with a color and scale transformation when hovered or 
 *   touched.
 * - Supports touch interactions for mobile devices, including drag
 *   functionality.
 * - Responsive design that recalculates the grid on window resize.
 * 
 * Technologies Used:
 * - Vanilla JavaScript for DOM manipulation and event handling.
 * - GSAP (GreenSock Animation Platform) for smooth animations.
 * 
 * Author: BLAMZAGOW
 * Date: 2024 - Year of the Void
 * 
 * Instructions:
 * 1. Include GSAP library in your HTML file.
 * 2. Ensure there is a container element with the class 'grid' in your HTML.
 * 3. Optionally, include a header element (e.g., <h1>) to account for its
 *    height in the layout.
 * 
 * Example Usage:
 * <body>
 *   <h1>Interactive Animation Grid</h1>
 *   <div class="grid"></div>
 *   <script src="path/to/gsap.min.js"></script>
 *   <script src="path/to/this-script.js"></script>
 * </body>
 */

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
