document.addEventListener('DOMContentLoaded', () => {
  const sliderArrowLeft = document.getElementById('slider-arrow-left');
  const sliderArrowRight = document.getElementById('slider-arrow-right');
  const heroImages = document.getElementsByClassName('slider-item');
  let sliderIdx = 0;

  sliderArrowLeft.addEventListener('click', () => {
    heroImages[sliderIdx].classList.add('hide');
    sliderIdx = sliderIdx === 0 ? 2 : sliderIdx - 1;
    heroImages[sliderIdx].classList.remove('hide');
  });

  sliderArrowRight.addEventListener('click', () => {
    heroImages[sliderIdx].classList.add('hide');
    sliderIdx = sliderIdx === 2 ? 0 : sliderIdx + 1;
    heroImages[sliderIdx].classList.remove('hide');
  });
});