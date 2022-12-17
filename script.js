let sliderBlockLine = document.querySelector('.sloder-block-line');
let nextBtn = document.querySelector('.slider-next-btn');
let prevBtn = document.querySelector('.slider-prev-btn');
let offset = 0;


nextBtn.addEventListener('click', () => {
  offset = offset + 256;
  if(offset > 768) {
    offset = 0;
  }
  sliderBlockLine.style.left = -offset + 'px';
})
prevBtn.addEventListener('click', () => {
  offset = offset - 256;
  if(offset < 0) {
    offset = 768;
  }
  sliderBlockLine.style.left = -offset + 'px';
})