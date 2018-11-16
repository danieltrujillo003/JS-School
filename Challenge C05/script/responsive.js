/* eslint-env browser */

// Make responsive funcionality to the menus

// variables declared to store HTML responsive elements
const rightbar = document.getElementById('rightbar');
const arrow = document.getElementById('arrow');
const leftbar = document.getElementById('leftbar');
const menuIcon = document.getElementById('menu');

// Add responsive functionality at touch
rightbar.addEventListener('touchstart', () => {
  rightbar.classList.toggle('right-bar-responsive');
  arrow.classList.toggle('rotate');
});

menuIcon.addEventListener('touchstart', () => {
  leftbar.classList.toggle('left-bar-responsive');
});
