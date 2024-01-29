// Mismo codigo del archivo app.js pero haciendo uso de la recursividad

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
    mostrarAutos(autos);
    llenarSelectYear();
});

    // Event Listener para los select de busqueda
form.addEventListener('change', e => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarTodo(Object.keys(datosBusqueda)[0], autos);
});

// Funciones
function llenarSelectYear() {
    for(let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarAutos(autos) {
    limpiarHtml();
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHtml = document.createElement('P');
        autoHtml.textContent = `
            ${marca} ${modelo} - ${year} - Precio: ${precio} - ${puertas} Puertas - Color: ${color} - transmision ${transmision}
        `;
        resultado.appendChild(autoHtml);
    });
}

function noResultado() {
    limpiarHtml();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado)
}

function filtrarTodo(referencia, autos) {
    if (referencia === undefined) {
        return autos;
    }
    const valorReferencia = datosBusqueda[referencia];
    const arrayKeysDatosBusqueda = Object.keys(datosBusqueda);
    const nuevoArray = autos.filter(auto => {
        if (valorReferencia) {
            if (referencia === 'minimo') {
                return auto['precio'] >= valorReferencia; 
            }
            if (referencia === 'maximo') {
                return auto['precio'] <= valorReferencia;
            }
            return auto[referencia] == valorReferencia;
        }
        return auto;
    });
    if(nuevoArray.length) {
        mostrarAutos(nuevoArray);
    } else {
        noResultado();
    }
    return filtrarTodo(arrayKeysDatosBusqueda[arrayKeysDatosBusqueda.indexOf(referencia) + 1], nuevoArray);
}