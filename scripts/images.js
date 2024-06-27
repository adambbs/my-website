document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('click', (event) => {
    
    if(image.classList.contains('clickable-image')){  
      event.stopPropagation();
      const imageSource = image.src;

      const newDiv = document.createElement('div');
      newDiv.classList.add('image-container');

      const newImage = document.createElement('img');
      newImage.src = imageSource;
      newImage.classList.add('displayed-image');

      const closeButton = document.createElement('button');
      closeButton.classList.add('close-image');
      closeButton.classList.add('close-container');
      closeButton.innerHTML = '<img src="./images/closeX.png" class="close-image close-x">';

      newDiv.appendChild(newImage);
      newDiv.appendChild(closeButton);

      document.body.appendChild(newDiv);
    }
  });
});

document.body.addEventListener('click', (event) => {
  event.stopPropagation();
  
  if (event.target.classList.contains('close-image')) {
    const displayedImage = event.target.closest('.image-container');
    if (displayedImage) {
      displayedImage.remove();
    }
  }
});
