/** Ejecutar pantalla completa con JavaScript */

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
})

cerrarBtn.addEventListener('click', () => {
    document.exitFullscreen();
});