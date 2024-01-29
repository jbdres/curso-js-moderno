// Variables
    // Selectores Html
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const form = document.querySelector('#buscador');

const resultado = document.querySelector('#resultado');
    // Año para el select
const maxYear = new Date().getFullYear();
let minYear = maxYear;
autos.forEach(auto => { // Determinando el menor año en la base de datos
    if (auto.year < minYear) {
        minYear = auto.year;
    }
});
    // Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // form.reset(); // Resetear el contenido del formulario (solo es necesario para algunos navegadores)
    mostrarAutos(autos); // Muestra los autos
    llenarSelectYear(); // Llena las opciones de año
});

    // Event Listener para los select de busqueda
form.addEventListener('change', e => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarAuto();
});
/*
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
}); */



// Funciones
function mostrarAutos(autos) {

    limpiarHtml(); // Elimina el html previo
    // El array 'autos' del archivo 'db.js' contiene la informacion de cada vehiculo
    autos.forEach(auto => {
        // Destructuring del objeto
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        // Insertar al Html
        const autoHtml = document.createElement('P');
        autoHtml.textContent = `
            ${marca} ${modelo} - ${year} - Precio: ${precio} - ${puertas} Puertas - Color: ${color} - transmision ${transmision}
        `;
        resultado.appendChild(autoHtml);
    })
}

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelectYear() {
    /**
     * * Nota: Con el codigo 'new Date()' obtenemos informacion de la fecha actual y al agregar el metodo '.getFullYear();' accedemos al ano (Hay mas metodo para acceder a informacion especifica).
     */

    for(let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones del año al select
    }

}

function filtrarAuto() {

    /**
     * * Nota: Las funciones de alto nivel en JavaScript son funciones que pueden ser pasadas como argumentos a otras funciones, o que pueden devolver funciones como valor.
     */

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor); // Se da como argumento una funcion
    
    if (resultado.length) {
        mostrarAutos(resultado); // Se llama solo si el array tiene elementos para mostrar
    } else {
        noResultado();
    }

}

function noResultado() {
    limpiarHtml();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) { // Recibe el parametro directamente desde el metodo 'filter()', no es necesario poner '.filter(filtrarMarca(auto))' en la linea 112
    const {marca} = datosBusqueda;
    if (marca) { // La condicion se refiere a que 'marca' no sea un string vacio
        return auto.marca === marca; // El metodo 'filter()' crea un nuevo array con todos los elementos que cumplan con la condicion implementada por la funcion dada.
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}