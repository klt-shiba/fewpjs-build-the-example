// Defining text characters for the empty and full hearts for you to use later.
// Hide modal on load
let modal = document.getElementById("modal"); 
modal.classList.add("hidden"); 

document.addEventListener("DOMContentLoaded", function() {

  const emptyHeart = '♡'
  const fullHeart = '♥'
  const heartButton = document.getElementsByClassName("like-glyph");
  
  // Your JavaScript code goes here!
  const heartColour = {
    "red": "",
    "": "red"
  }
  const heartFill = {
    "♡": "♥",
    "♥": "♡"
  }


  
let likeArticle = (e) => {
// e.target // the element that triggered the event
  let heart = e.target
  console.log(heart);
  //URL for the API/Endpoint 
  mimicServerCall("") //fetch()
  // if the call succeeds, the promise 
  .then(function(serverMessage) {
    heart.innerText = heartFill[heart.innerText]
    heart.style.color = heartColour[heart.style.color]
  })
  .catch((e) => {
    modal.classList.remove("hidden"); 
    modal.innerHTML = `${e}`
    setTimeout(function(){
      modal.classList.add("hidden");  
    }, 5000);
  })
};

for (let glyph of heartButton) {
  glyph.addEventListener("click", likeArticle)
}
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
