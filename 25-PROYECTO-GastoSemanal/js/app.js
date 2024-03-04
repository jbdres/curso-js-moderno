// Variables y Selectore
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
    gastosListado.addEventListener('click', eliminarGasto);
}

// Classes
class Presupuesto {
    constructor(presupuesto) { // Presupuesto: cantidad de dinero con la que inicia la app
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calularRestante();
    }
    calularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0); // 0: valor inicial del total
        // array.reduce(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id.toString() !== id);
        // array.filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
        this.calularRestante();
    }
}

class UI {
    insertarPresupuesto(presupuesto) {
        document.querySelector('#total').textContent =  presupuesto;
        document.querySelector('#restante').textContent = presupuesto;
    }
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        setTimeout(() => {
            document.querySelector('.primario .alert').remove();
        }, 3000);
    }
    agregarGastoListado(gastos) {
        this.limpiarHTML();
        gastos.forEach(gasto => {
            const {nombre, cantidad, id} = gasto;
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; // nuevoGasto.setAttribute("data-id", id);
            nuevoGasto.innerHTML = `
                ${nombre}
                <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;
            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            nuevoGasto.appendChild(btnBorrar);
            gastosListado.appendChild(nuevoGasto);
        });
    }
    actualizarRestante(restante) {
        document.querySelector('span#restante').textContent = restante;
    }
    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        if ((presupuesto/4) > restante) { // Comprobar el 25% 
            restanteDiv.classList.remove('alert-success', 'alert-warning'); // Quita el de exito y el de alerta
            restanteDiv.classList.add('alert-danger'); // Agrega el de peligro
        } else if((presupuesto/2) > restante) { // 50%
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        // Presupuesto en 0
        if(presupuesto <=0) {
            ui.imprimirAlerta('El presupuesto se ha acabado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
    limpiarHTML() {
        while(gastosListado.firstChild) {
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }
}

let presupuesto;
const ui = new UI();

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    // const presupuestoUsuario = 50000;
    if(preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        // cadena vacia = btnAceptar del prompt
        // null = btnCancelar del promp
        window.location.reload(); // Se reinicia la pagina
    }
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuestoUsuario);
}

function agregarGasto(e) {
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    } else if(cantidad<=0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
    } else {
        const gasto = {nombre, cantidad, id: Date.now()}; // Otra forma de crear objetos
        presupuesto.nuevoGasto(gasto); // Añadiendo gasto al presupuesto
        ui.imprimirAlerta('Correcto', 'correcto');
        // Añadiendo gasto al HTML
        const {gastos} = presupuesto;
        ui.agregarGastoListado(gastos);
        ui.comprobarPresupuesto(presupuesto);
        const {restante} = presupuesto;
        ui.actualizarRestante(restante);
        formulario.reset();
    }
}

function eliminarGasto(e) {
    if(e.target.classList.contains('borrar-gasto')) {
        const {id} = e.target.parentElement.dataset;
        console.log(id);
        presupuesto.eliminarGasto(id);
        ui.comprobarPresupuesto(presupuesto);
        const {restante} = presupuesto;
        ui.actualizarRestante(restante);
        e.target.parentElement.remove();
    }
}