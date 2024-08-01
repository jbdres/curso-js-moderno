/** Como consultar un JSON? */

const btnCargarJson = document.querySelector('#cargarJSON');
btnCargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const URL = './data/empleado.json';
    fetch(URL)
        .then(result => result.json())
        .then(data => mostrarHTML(data));

}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}