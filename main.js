// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Provided function to mock server response
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Add the .hidden class to the error modal
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// Select all hearts
const hearts = document.querySelectorAll(".like-glyph");

// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;

  // Simulate server request
  mimicServerCall()
    .then(() => {
      // Successful response
      if (heart.textContent === "♡") {
        heart.textContent = "♥";
        heart.classList.add("activated-heart");
      } else {
        heart.textContent = "♡";
        heart.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      // Failed response
      errorModal.classList.remove("hidden");
      document.getElementById("modal-message").textContent = error;
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}

// Add click event listeners to all hearts
hearts.forEach((heart) => {
  heart.addEventListener("click", handleHeartClick);
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
