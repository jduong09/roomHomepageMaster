document.addEventListener('DOMContentLoaded', () => {
  const slidersArrowLeft = document.getElementsByClassName('slider-arrow-left');
  const slidersArrowRight = document.getElementsByClassName('slider-arrow-right');
  const heroImages = document.getElementsByClassName('slider-item');
  let sliderIdx = 0;

  for (let i = 0; i < slidersArrowLeft.length; i++) {
    slidersArrowLeft[i].addEventListener('click', () => {
      heroImages[sliderIdx].classList.add('hide');
      sliderIdx = sliderIdx === 0 ? 2 : sliderIdx - 1;
      heroImages[sliderIdx].classList.remove('hide');
    });
  }

  for (let j = 0; j < slidersArrowRight.length; j++) {
    slidersArrowRight[j].addEventListener('click', () => {
      heroImages[sliderIdx].classList.add('hide');
      sliderIdx = sliderIdx === 2 ? 0 : sliderIdx + 1;
      heroImages[sliderIdx].classList.remove('hide');
    });
  }
});