// script.js
function nextPage() {
    // Redirecting the page to yes
    window.location.href = './yes.html';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    
    // get the width and height of the row
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // moving the button here and there 
    const newX = Math.random() * (windowWidth - noButton.offsetWidth);
    const newY = Math.random() * (windowHeight - noButton.offsetHeight);
    
    // applying the button position umm styling 
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}