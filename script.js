// script.js
function nextPage() {
    // Redirige a otra página (puedes cambiar la URL si es necesario)
    window.location.href = './yes.html';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    
    // Obtiene el ancho y alto de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Genera nuevas posiciones aleatorias dentro de la ventana
    const newX = Math.random() * (windowWidth - noButton.offsetWidth);
    const newY = Math.random() * (windowHeight - noButton.offsetHeight);
    
    // Aplica las nuevas posiciones al botón
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}