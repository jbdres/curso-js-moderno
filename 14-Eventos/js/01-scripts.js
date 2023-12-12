// Detectar cuando el HTML esta listo

// Ente los () va el tipo de evento que escucha
document.addEventListener('DOMContentLoaded', () => { // Funcion anonima
    console.log('Documento listo');
    // DOMContentLoaded, Es un evento que se ejecuta cuando se es descargado absolutamente todo el HTML y es posible visualizarlo
}); 

// ------ PRUEBA DEL EVENTO ------

// Las impresiones fuera del evento se imprimen antes de que el HTML este listo
console.log(1);
document.addEventListener('DOMContentLoaded', () => {
    console.log(2); // Este se imprime de ultimas
});
console.log(3);