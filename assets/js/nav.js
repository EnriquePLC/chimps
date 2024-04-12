function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

function createBanana() {
    const banana = document.createElement('img');
    banana.src = "assets/img/png/Banana derecha.png";
    banana.classList.add('banana');
    banana.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria dentro de la ventana
    banana.style.top = `5%`;
    document.getElementById('comp-lukmnvj2').appendChild(banana); // Agrega la banana al section

    banana.animate([
        { transform: 'translateY(-100%) rotate(0deg)' }, // Desde arriba
        { transform: `translateY(110vh) rotate(360deg)` } // Hasta abajo dentro del section con una altura aleatoria
    ], {
        duration: Math.random() * 10000 + 5000, // Duración aleatoria entre 1 y 3 segundos
        easing: 'cubic-bezier(0.1, 0.82, 0.45, 1)', // Función de temporización para un movimiento natural
        iterations: Infinity // Repetir la animación infinitamente
    });
}

// Crear bananas cada cierto intervalo de tiempo
const interval = setInterval(createBanana, 1000);

// Limpiar las bananas después de cierto tiempo
setTimeout(() => {
    clearInterval(interval); // Detener la creación de nuevas bananas
    const bananas = document.querySelectorAll('.banana');
    bananas.forEach(banana => banana.remove()); // Eliminar todas las bananas del DOM
}, 90000); // Eliminar las bananas después de 10 segundos (10000 milisegundos)
