// Eventos con el Mouse
const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('click', () => { // Uno de los eventos mas usuales con el mouse
    console.log('Click en nav');
});

nav.addEventListener('mouseenter', () => { // Parecido a 'hover' de entrada en CSS
    console.log('Entrando a la navegacion');
});

nav.addEventListener('mouseout', () => { // Parecido a 'hover' de salida en CSS
    console.log('Saliendo de la navegacion');
});

nav.addEventListener('mouseup', () => {
    console.log('Click pero se suelta el mouse');
});

nav.addEventListener('dblclick', () => {
    console.log('Doble click');
});