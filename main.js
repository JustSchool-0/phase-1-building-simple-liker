// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

disableErrorMessage(); //???

document.addEventListener('DOMContentLoaded', () => {
    const likeElements = document.querySelectorAll('.like-glyph');
    likeElements.forEach((likeElement) => {
        likeElement.addEventListener('click', () => {
            mimicServerCall()
                .then(() => {
                    disableErrorMessage();
                    if (likeElement.textContent === EMPTY_HEART) {
                        likeElement.textContent = FULL_HEART;
                        likeElement.classList.add('activated-heart')
                    } else {
                        likeElement.textContent = EMPTY_HEART;
                        likeElement.classList.remove('activated-heart')
                    }
                })
                .catch((error) => {
                    enableErrorMessage(error);
                });
        });
    });
});

function enableErrorMessage(message) {
    console.log('enabling error message');

    if (message) {
        const modalMessage = document.querySelector('#modal-message');
        modalMessage.textContent = message;
    }

    const element = document.querySelector('#modal');
    element.classList.remove('hidden');
    setTimeout(() => {
        disableErrorMessage();
    }, 3000)
}

function disableErrorMessage() {
    console.log('disabling error message');
    const element = document.querySelector('#modal');
    element.classList.add('hidden');
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}
