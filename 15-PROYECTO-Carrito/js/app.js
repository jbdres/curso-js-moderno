// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // tbody de la tabla que ubica los cursos dentro del carrito de compras
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); // Boton que elimina los cursos de carrito
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners(); // Es necesariamente obligatorio llamar a la funcion
function cargarEventListeners() {
    // Agregar curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', determinarCurso);
    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    // Vaciar el carrito (Cuando es poco codigo se recomienda hacerlo de esta manera)
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Receteando el array
        limpiarHtml(); // Limpiando el carrito
    });
}

// Funciones
function determinarCurso (e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

    /**
     * Comparar las clases del elemento que recibe el evento con 'agregar-carrito'
     * para asi determinarlo y con este acceder a 2 los elementos padre hasta el
     * card sobre el cual se encuentra, ya que este tiene toda la informacion del curso.
     */

}

// Eliminar curso del carrito 
function eliminarCurso(e) { // Eliminar mediante el boton rojo del curso en el carrito
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id'); // Obteniendo el id del curso a eliminar

        // Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId); // Devuelve un array en el que se encuentra cada curso con la condicion dada
        
        console.log(articulosCarrito);
        carritoHtml();
    }
}

function leerDatosCurso(curso) {

    // Objeto con la informacion del curso
    const infoCurso = {
        imagenRuta: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // Acceder a los atributos de un elemento
        cantidad: 1 
    }

    //console.log(infoCurso);

    // Comprobar la existencia del curso en el carrito
    /**
     * * El metodo 'some' comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion proporcionada
     */
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        
        // Actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];

    } else {
        // Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; // A la copia del array se le agrega el curso seleccionado
    }

    console.log(articulosCarrito);
    carritoHtml();

}

// Muestra el carrito de compras en el HTML
function carritoHtml() {

    // Limpiar el HTML
    limpiarHtml();

    // Recorre el carrito y generar el HTML
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

        // Agregar el HTML del carrito en tbody
        contenedorCarrito.appendChild(row);
        
    });
    
}

// Eliminar los cursos del tbody
function limpiarHtml() {
    // Forma lenta
    //contenedorCarrito.innerHTML = '';

    // Forma mas rapida
    while (contenedorCarrito.firstChild) { // Mientras haya un elemento en el contenedor
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); // Elimina hijo por hijo hasta que el contenedor este vacio
    }

}

