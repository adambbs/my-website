import "./images.js"
import "./animation.js"

const champlainButton= document.querySelector('.champlain-button');
const mcgillButton= document.querySelector('.mcgill-button');
const ltButton=document.querySelector('.lt-button');

selectSchool(ltButton);

champlainButton.addEventListener('mouseenter', ()=> {
  champlainButton.innerHTML= '<img src="./images/page3/school-picture/logos/Champlain-college-2.png" class="champlain-logo-hover">';
  champlainButton.classList.add('champlain-button-hover');
});

champlainButton.addEventListener('mouseleave', ()=> {
  champlainButton.innerHTML= '<img src="./images/page3/school-picture/logos/Champlain-college.png" class="champlain-logo">';
  champlainButton.classList.remove('champlain-button-hover');
});

selectSchool(champlainButton);

mcgillButton.addEventListener('mouseenter', ()=> {
  mcgillButton.innerHTML= '<img src="./images/page3/school-picture/logos/Mcgill-2.png" class="mcgill-logo-hover">';
  mcgillButton.classList.add('mcgill-button-hover');
});

mcgillButton.addEventListener('mouseleave', ()=> {
  mcgillButton.innerHTML= '<img src="./images/page3/school-picture/logos/Mcgill.png" class="mcgill-logo">';
  mcgillButton.classList.remove('mcgill-button-hover');
});

selectSchool(mcgillButton);


function selectSchool (button){
  const id= button.dataset.id;
  const closeButton=document.querySelector(`.js-close-${id}`);

  const handleClick = (event) => {
    event.stopPropagation();

    if (event.target === button || 
    event.target.classList.contains(`${id}-logo-hover`)|| 
    event.target.classList.contains(`${id}-logo`)) {
      const container = document.querySelector(`.${id}-display`)
      if (container.classList.contains('animate__backOutRight')){
        container.classList.remove('animate__backOutRight')
        container.classList.add('display-school', 'animate__backInLeft');
      } else {
        container.classList.add('display-school', 'animate__backInLeft');
      }
    }
  }
  button.addEventListener('click', handleClick);

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const displayedSchool= document.querySelector(`.${id}-display`)
    displayedSchool.classList.remove('animate__backInLeft');
    displayedSchool.classList.add('animate__backOutRight');
    
    setTimeout(() => {
      displayedSchool.classList.remove('display-school');
    }, 1000); // Adjust timeout to match animation duration
  })
}


document.addEventListener('DOMContentLoaded', () => {
  const fundraisingContainer=document.querySelector('.products-fundraising-js');
  const listFundraisingItems=document.querySelectorAll('.fundraising-item-js');
  const totalFundraisingItems=listFundraisingItems.length;
  let fundraisingIndex=0;

  document.getElementById('nxtBtn-fundraising').addEventListener('click', () => {
    fundraisingIndex = (fundraisingIndex + 1) % totalFundraisingItems;
    updateContainer(fundraisingIndex, fundraisingContainer);
  });

  document.getElementById('pvsBtn-fundraising').addEventListener('click', () => {
    fundraisingIndex = (fundraisingIndex - 1 + totalFundraisingItems) % totalFundraisingItems;
    updateContainer(fundraisingIndex, fundraisingContainer);
  });

  updateContainer(fundraisingIndex, fundraisingContainer);

  
  const roboticsContainer = document.querySelector('.products-robotics-js');
  const listRoboticsItems = document.querySelectorAll('.robotics-item-js');
  const totalRoboticsItems = listRoboticsItems.length;
  let roboticsIndex = 0;

  document.getElementById('nxtBtn-robotics').addEventListener('click', () => {
    pauseCurrentVideo(roboticsIndex, listRoboticsItems);
    roboticsIndex = (roboticsIndex + 1) % totalRoboticsItems;
    updateContainer(roboticsIndex, roboticsContainer);
  });

  document.getElementById('pvsBtn-robotics').addEventListener('click', () => {
    pauseCurrentVideo(roboticsIndex, listRoboticsItems);
    roboticsIndex = (roboticsIndex - 1 + totalRoboticsItems) % totalRoboticsItems;
    updateContainer(roboticsIndex, roboticsContainer);
  });

  updateContainer(roboticsIndex, roboticsContainer);
});


function updateContainer(index, container) {
  const offset = -index * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function pauseCurrentVideo(currentIndex, items) {
  if (currentIndex >= 0 && currentIndex < items.length) {
    const currentItem = items[currentIndex];
    const videoElement = currentItem.querySelector('video');
    if (videoElement && !videoElement.paused) {
      videoElement.pause();
    }
  }
}

