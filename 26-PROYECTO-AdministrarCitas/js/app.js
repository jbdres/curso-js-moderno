// Variables
    // ui
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
    // inputs
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
let editando; // Saber si una cita se edita o no, esto se hace para reutilizar la funcion 'nuevaCita'

// Events
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

// Objetos
    // Valores finales del formulario para una cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Classes
class Citas {
    constructor() {
        this.citas = [];
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
    modificarCita(citaActualizada) { // .map reescribe el arreglo
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        // Tipo de alerta
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.textContent = mensaje;
        // Mostrando en el DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    imprimirCitas({citas}) {  // Haciendo destructuring del objeto 'administrarCitas' de la clase 'CITA' desde el argumento
        this.limpiarHTML();
        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
                // Creando el elemento
            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id; // data-id = id;
                // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('H2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('P');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('P');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('P');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('P');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('P');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

                // Boton para eliminar cita
            const btnEliminar = document.createElement('BUTTON');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg>' // El codigo que se muestra del icono presente en el boton | Recurso: https://heroicons.dev/ 

            btnEliminar.onclick = () => eliminarCita(id); // Creando el evento para el boton eliminar
            
            // Agrega un boton para editar
            const btnModificar = document.createElement('BUTTON');
            btnModificar.classList.add('btn', 'btn-info', 'mr-2');
            btnModificar.innerHTML = 'Modificar <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg>';

            btnModificar.onclick = () => cargarEdicion(cita);

                // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnModificar);

                // Agregar citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }
    limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild).remove();
        }
    }
}

    // Variables globales
const ui = new UI();
const administrarCitas = new Citas();

// Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value; // Asignar valor a cada atributo en base al input que registre el evento
}

function nuevaCita(e) {
    e.preventDefault();
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj; // Destrcturing del objeto
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') { // Validacion
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando) {
        ui.imprimirAlerta('Editado correctamente', 'exito');
        administrarCitas.modificarCita({...citaObj}); // Pasando una copia del objeto
        ui.imprimirCitas(administrarCitas);
            // Despues de editar
        editando = false;
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';
    } else {
        citaObj.id = Date.now(); // Agregando un id para cada cita
        administrarCitas.agregarCita({...citaObj});
            // * IMPORTANTE: Se pasa como argumento una copia del objeto ya que si fuera la referencia original, todos los registros del array 'citas' serian los mismos
        ui.imprimirAlerta('Se agregó correctamente', 'exito');
    }

    // Reiniciando valores para el formulario y el objeto
    formulario.reset();
    reiniciarObjeto();

    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id);
    // Mostrar un mensaje
    ui.imprimirAlerta('La cita se elimino correctamente', 'exito');
    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

// Cargar los datos y el modo edicion
function cargarEdicion(cita) {
    console.log(administrarCitas.citas);
    editando = true;
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
        // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
        // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
        // Formulario
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';
}