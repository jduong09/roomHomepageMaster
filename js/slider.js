document.addEventListener('DOMContentLoaded', () => {
  const slidersArrowLeft = document.getElementsByClassName('slider-arrow-left');
  const slidersArrowRight = document.getElementsByClassName('slider-arrow-right');
  const heroImages = document.getElementsByClassName('slider-item');
  const sliderDiv = document.getElementsByClassName('slider');
  let sliderIdx = 0;

  const sliderDivArray = Array.from(sliderDiv);

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

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 922) {
      for (let k = 0; k < sliderDivArray.length; k++) {
        if (sliderDivArray[k].parentElement.classList.contains('img-div')) {
          const heroDivParent = sliderDivArray[k].parentElement.parentElement.children[1];
          heroDivParent.appendChild(sliderDivArray[k]);
          sliderDivArray[k].classList.add('desktop');
        }
      }
    } else {
      for (let l = 0; l < sliderDivArray.length; l++) {
        if (sliderDivArray[l].parentElement.classList.contains('hero-div')) {
          const imgDivParent = sliderDivArray[l].parentElement.parentElement.children[0];
          imgDivParent.appendChild(sliderDivArray[l]);
          sliderDivArray[l].classList.remove('desktop');
        }
      }
    }
  });

  if (window.innerWidth >= 922) {
    for (let l = 0; l < sliderDivArray.length; l++) {
      if (sliderDivArray[l].parentElement.classList.contains('img-div')) {
        const heroDivParent = sliderDivArray[l].parentElement.parentElement.children[1];
        heroDivParent.appendChild(sliderDivArray[l]);
        sliderDivArray[l].classList.add('desktop');
      }
    }
  } else {
    for (let m = 0; m < sliderDivArray.length; m++) {
      if (sliderDivArray[m].parentElement.classList.contains('hero-div')) {
        const imgDivParent = sliderDivArray[m].parentElement.parentElement.children[0];
        imgDivParent.appendChild(sliderDivArray[m]);
        sliderDivArray[m].classList.remove('desktop');
      }
    }
  }
});