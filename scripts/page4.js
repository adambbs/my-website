const sendButton=document.querySelector('.send-button');
const userComment=document.querySelector('.user-comment');
const messageContainer=document.querySelector('.timeout-message');

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  event.stopPropagation();
  setTimeout(() =>{
    if (window.location.hash === "#comment-section") {
        document.getElementById("comment").scrollIntoView({ behavior: "smooth" });

        setTimeout(() =>{
          window.history.replaceState(null, null, window.location.pathname);
        },1000);
    }
  }, 500);
});


let displayMessage=false;
let timeMessage;

sendButton.addEventListener('click', () => {

  if (!displayMessage){
    messageSent();
  } else {
    clearTimeout(timeMessage);
    messageSent();
  };
});

userComment.addEventListener("keydown", (event) => {
  if (event.key==="Enter"){
    if (!displayMessage){
      messageSent();
    } else {
      clearTimeout(timeMessage);
      messageSent();
    };  
  };
});


function messageSent() {
  
  if(!userComment.value){
    messageContainer.innerHTML=`
    Please leave a comment before sending.
    `
    sendButton.innerHTML='Send'
    sendButton.classList.remove('send-button-clicked');
    messageContainer.style.top="70px"; 
    messageContainer.style.backgroundColor="red";
    messageContainer.style.opacity="1";
    displayMessage=true
  
    timeMessage=setTimeout(()=> {
      messageContainer.style.top="0"
      messageContainer.style.opacity="0";
      displayMessage=false;
    }, 4000);  
  } else {
    userComment.value=''

    messageContainer.innerHTML=`
    Your message was not sent as this feature is not available yet. For now, please use the email link
    in the "Contacts" section if you have any comments to direct to me.
    `
    messageContainer.style.top="70px";
    messageContainer.style.backgroundColor="rgb(0,150,0)";
    messageContainer.style.opacity="1";
    sendButton.innerHTML='Sent'
    sendButton.classList.add('send-button-clicked');
 
    displayMessage=true

    timeMessage=setTimeout(()=> {
      messageContainer.style.top="0"
      messageContainer.style.opacity="0";
      sendButton.innerHTML='Send'
      sendButton.classList.remove('send-button-clicked');
      displayMessage=false;
    }, 7000);
  };
};

