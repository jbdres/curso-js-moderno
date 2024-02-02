// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Event Listeners
cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', determinarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        sincronizarStorage();
        limpiarHtml();
    });

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHtml();
    });

}

// Funciones
function determinarCurso (e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        sincronizarStorage();
        console.log(articulosCarrito);
        carritoHtml();
    }
}

function leerDatosCurso(curso) {

    const infoCurso = {
        imagenRuta: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }

    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
        sincronizarStorage();

    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
        sincronizarStorage();
    }

    console.log(articulosCarrito);
    carritoHtml();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function carritoHtml() {

    limpiarHtml();

    articulosCarrito.forEach(curso => {

        const {imagenRuta, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src='${imagenRuta}' width='100'> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> <a href='#' class='borrar-curso' data-id=${id}> X </a> </td>
        `;

        contenedorCarrito.appendChild(row);
        
    });
    
}

function limpiarHtml() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

