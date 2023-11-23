// Eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
console.log(primerEnlace); // Enlace de vender

// Primera forma: Eliminarlo por si mismo
primerEnlace.remove();

// Segunda forma: Referencia del padre al hijo... el padre elimina al hijo
const navegacion = document.querySelector('.navegacion'); // Padre
console.log(navegacion.children); // Obtiene a los hijos

    // La referencia anterior se refiere a la posicion del elemento, con el codigo anterior se obtiene la posicion de cada uno de los elementos dentro de la navegacion

navegacion.removeChild(navegacion.children[1] /**Esta es la referencia */); // Eliminando el segundo enlace dentro de la navegacion