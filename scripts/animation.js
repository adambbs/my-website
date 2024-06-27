document.addEventListener('DOMContentLoaded', (event) => {
  event.stopPropagation();
  const animatedElements = document.querySelectorAll('.animation');

  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.35 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        addedAnimation(entry);
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});

function addedAnimation(entry){
  if (entry.target.classList.contains('row-odd')){
    entry.target.classList.add('animate__fadeInLeftBig');
  } else if (entry.target.classList.contains('row-even')){
    entry.target.classList.add('animate__fadeInRightBig');
  } else if (entry.target.classList.contains('video-editing')||entry.target.classList.contains('robotics')){
    entry.target.classList.add('animate__fadeInBottomLeft');
  } else if (entry.target.classList.contains('fundraising')){
    entry.target.classList.add('animate__fadeInBottomRight');
  } else{
    entry.target.classList.add('animate__fadeInDown');
  }
}