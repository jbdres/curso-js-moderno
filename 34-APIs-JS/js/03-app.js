/** Detectar si hay conextion a internet o no */

    // Saber si se esta conectado a la red actualmente 
const enLinea = navigator.onLine;
console.log(enLinea);

    // Eventos de windows cuando el estado de la conexion cambia
window.addEventListener('online', updateNetworkState);
window.addEventListener('offline', updateNetworkState);

function updateNetworkState(e) {
    if (navigator.onLine) {
        console.log('Si estas conectado a internet.');
    } else {
        console.log('Parece que se ha perdido la conexion a la red.');
    }
}