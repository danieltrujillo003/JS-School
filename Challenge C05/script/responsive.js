const rightbar = document.getElementById('rightbar');
const arrow = document.getElementById('arrow');
const leftbar = document.getElementById('leftbar');
const menuIcon = document.getElementById('menu');
rightbar.addEventListener('touchstart', () => {
  rightbar.classList.toggle('right-bar-responsive');
  arrow.classList.toggle('rotate');
});
menuIcon.addEventListener('touchstart', () => {
  leftbar.classList.toggle('left-bar-responsive');
});
