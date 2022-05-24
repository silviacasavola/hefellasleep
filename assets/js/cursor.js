document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let circle = document.getElementById('cursor-container');
  let left = e.offsetX;
  let top = e.offsetY;
  circle.style.left = left + 'px';
  circle.style.top = top + 'px';
});
