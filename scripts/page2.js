import "./images.js"
import  "./animation.js"

document.querySelectorAll('.country').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    const buttonId = button.dataset.id;
    const container = document.querySelector(`.${buttonId}`);
    if (container.classList.contains('animate__zoomOut')){
      container.classList.remove('animate__zoomOut');
      container.classList.add('display-country', 'animate__zoomIn');
    } else{
      container.classList.add('display-country', 'animate__zoomIn');
    }
  });
});

document.querySelectorAll('.close-country').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    
    const displayedCountry = document.querySelector('.display-country');
    if (displayedCountry) {
      displayedCountry.classList.remove('animate__zoomIn');
      displayedCountry.classList.add('animate__zoomOut');
      setTimeout(() => {
        displayedCountry.classList.remove('display-country');
      }, 300); // Adjust timeout to match animation duration
    }
  });
});
