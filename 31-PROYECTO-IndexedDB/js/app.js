// Crear la base de datos para el proyecto de citas en indexedDB
let DB;
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevaCita);

// Heading
const heading = document.querySelector('#administra');


let editando = false;

window.onload = () => {
    eventListeners();
    createDB();
}


// Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
}

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}


function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}

// CLasses
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

class UI {

    constructor({citas}) {
        this.textoHeading(citas);
    }

    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas() {
       
        this.limpiarHTML();

        // Leer el contenido de la base de datos
        const objectStore = DB.transaction('citas').objectStore('citas');
        
        // Determinar la cantidad de registros en la base de datos
        const total = objectStore.count();
            // console.log(total.result); // ERROR!

        const fnTextoHeading = this.textoHeading; // Heading de citas

        total.onsuccess = function() { // Obtener cantidad de registros sin errores (total.onsuccess) y con eso determinar un heading para las citas

            // console.log(total.result);
            // this.textoHeading(); // ERROR! 'textoHeading()' no existe en la funcion actual desde la que se llama => scope

            fnTextoHeading(total.result);

        }
        
        // Iterar la informacion de la base de datos
        objectStore.openCursor().onsuccess = function(e) {
            const cursor = e.target.result;
            if (cursor) { // Validar que hay algo por iterar
                
                // Crear HTML
                // ----------------------------------------------------------

                const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cursor.value; // Destructuring al objeto actual de la cita en el cursor
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

                // ----------------------------------------------------------

                // Ir al siguiente elemento del cursor
                cursor.continue();

            }
        }

   }

   textoHeading(resultado) {
        if( resultado > 0 ) {
            heading.textContent = 'Administra tus Citas '
        } else {
            heading.textContent = 'No hay Citas, comienza creando una'
        }
    }

   limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
   }
}


const administrarCitas = new Citas();
console.log(administrarCitas);
const ui = new UI(administrarCitas);

function nuevaCita(e) {
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...citaObj} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...citaObj});

        // Insertar registro en indexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');
            // Habilitar el object store
        const objectStore = transaction.objectStore('citas');
        objectStore.add(citaObj); // Agregar en la base de datos

            // Saber si todo se ha ejecutado como deberia
        transaction.oncomplete = () => {

            console.log('Cita agregada');
            // Mostrar mensaje de que todo esta bien...
            ui.imprimirAlerta('Se agregó correctamente');
            
        }
        
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas();

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


function eliminarCita(id) {
    administrarCitas.eliminarCita(id);

    ui.imprimirCitas()
}

function cargarEdicion(cita) {

    const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Llenar los Inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}

function createDB() {

    // Crear la base de datos en version 1.0
    const crearDB = window.indexedDB.open('citas', 1);
    // Si hay un error
    crearDB.onerror = function() {
        console.log('Hubo un error');
    }
    // Si todo sale bien
    crearDB.onsuccess = function() {
        DB = crearDB.result;
        // Mostrar citas al cargar (Pero indexedDB esta listo)
        ui.imprimirCitas();
    }

    // Definir el schema
    crearDB.onupgradeneeded = function(e) {

        const db = e.target.result;
        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });
        // Definir todas las columnas
        objectStore.createIndex('mascota', 'mascota', { unique:false });
        objectStore.createIndex('propietario', 'propietario', { unique:false });
        objectStore.createIndex('telefono', 'telefono', { unique:false });
        objectStore.createIndex('fecha', 'fecha', { unique:false });
        objectStore.createIndex('hora', 'hora', { unique:false });
        objectStore.createIndex('sintomas', 'sintomas', { unique:false });
        objectStore.createIndex('id', 'id', { unique:false });

        console.log('DB creada y lista');
    }
    
}