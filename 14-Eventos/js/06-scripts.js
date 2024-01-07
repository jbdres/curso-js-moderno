// Que es el Event Bubbling?
/**
 * * El registro de un evento se propaga a muchos otros lugares, dando resultados que no son los esperados.
 * 
 * Ejemplo: En el archivo HTML hay un div 'card' que posee otro div llamado 'info' y este ultimo tiene un h1, en este caso el titulo del card. Si se quisiera registrar un evento 'click' para cada elemento mencionado (ambos divs y el h1), se apreciaria el 'event bubbling' ya que para el evento del titulo se habilita tanto este como para el 'info' y el 'card'. Para que esto no suceda se usa el metodo 'stopPropagation()' del evento
 * 
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en el titulo');
});