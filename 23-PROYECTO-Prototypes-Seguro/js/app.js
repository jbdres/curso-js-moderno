
// Contructores
    // Datos de seguro
function Seguro(marca,year,tipo) { //Entradas de la interfaz
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
    // Prototype
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    // Año
        /**
         * * Cada año en el que el año seleccionado es menor, el costo del seguro baja un 3%
         */
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    // Seguro 
        /**
         * * Si el seguro es basico se multiplica por un 30% mas
         * * Si el seguro es completo se multiplica por un 50% mas
         */
    
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
    
}

    // Interfaz
function UI() {} // Campos

// Prototypes
    // Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 11;

    const selectYear = document.querySelector('#year'); // Elemento HTML
    for(let i = max; i > min; i--) {
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i; // Valores de elemento creado
        selectYear.appendChild(option);
    }
}

// Mostrar alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('DIV');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}


UI.prototype.mostrarResultado = (seguro, total) => {
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
    }

    // Crear el resultado
    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span> </p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span> </p>
        <p class="font-bold">Tipo: <span class="font-normal">${tipo}</span> </p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span> </p>
    `;
    const resultadoDiv = document.querySelector('#resultado');

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div); // * Se borra el spinner pero se muestra el resultado
    }, 3000);
}

// Intancias
    // Interfaz
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
});

// Add EventListeners
eventListeners();
function eventListeners() {
    /**
        * ! No se recomienda poner selectores dentro de prototypes */
    const formulario = document.querySelector('#cotizar-seguro'); // Selector
    formulario.addEventListener('submit', cotizarSeguro);
}

// Funciones

function cotizarSeguro(e) {
    e.preventDefault();
    
    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de cotizacion
        /**
         * * Nota: En el HTML hay dos radios y se asocian entre si gracias a que comparten el mismo valor en la propiedad 'name', en este caso 'tipo'; por lo cual el radio se obtiene en base a eso y que este seleccionado.
         */
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca == '' || year == '' || tipo == '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    // Ocultar las cotizaciones previas
    const resultado = document.querySelector('#resultado div');
    if (resultado != null) { // Si se encontro alguna cotizacion previa
        resultado.remove();
    }

    // Calculo del seguro
        // Instancia del seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(seguro, total);

}