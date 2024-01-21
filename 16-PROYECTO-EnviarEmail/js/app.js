document.addEventListener('DOMContentLoaded', function () { // Se ejecuta cuando todo el codigo HTML se ha desacargado
    
    // El objeto guardara los campos del formulario despues de ser validados
    const email = {
        email : '',
        asunto : '',
        mensaje : ''
    }


    // Seleccionar los elementos de la interfaz
    const formulario = document.querySelector('#formulario')
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]'); // Etiqueta y selector de atributo (especificando el tipo de boton)
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    // Agregar las correctas acciones para reset
    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();

        // Mostrar y centrar el spinner
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        // Ocultando el spinner a los 3 segundos (o sino estaria para siempre)
        setTimeout(() => {

            spinner.classList.add('hidden');
            spinner.classList.remove('flex');

            // Limpiando el formulario
            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 2000);
    }

    // Determinar si hay texto o no en cada campo
    function validar(e) {
        
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target);
            email[e.target.name] = '';
            comprobarEmail();
            return; // Detiene la ejecucion del codigo que este despues del if
        }

        // Solo funciona para 'email'
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        // Para llegar a este punto, cada input debio haber pasado las validaciones anteriores
        limpiarAlerta(e.target);

        // Asignando valores al objeto del formulario
        email[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarEmail();
    }

    // Crear alerta para el campo sin texto
    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center'); // Agregando clases de Tailwind CSS

        // Inyectar el error al formulario
        referencia.parentElement.appendChild(error);
    
    }

    function limpiarAlerta(referencia) {
        // Comprobando si la alerta ya existe
        const alerta = referencia.parentElement.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ // Es una expresion regular para emails
        /**
         * * Una expresion regular es un codigo que busca un patron en una cadena de texto o en una serie de numeros | Patron de un email: usuario@dominio.com ('.com': es el top-level domain y puede cambiar al igual que el usuario y el dominio; ej. .net, .dev)
         * 
         * * Existen diversas expresiones regulares, ej. para el numero de una tarjeta de credito, una direccion postal, etc...
         * 
         * * El codigo de la expresion con cualquier fin, se encuentra con una busqueda sencilla en internet
         */

        const resultado = regex.test(email); // Utilizar la expresion con el metodo 'test' | el argumento viene siendo el texto o numero a validar y devuelve 'true' o 'false' dependiendo si cumple o no con la validacion
        return resultado;
    }

    function comprobarEmail() {

        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        
        /**
         * * 'Object.values' toma el objeto y crea un arreglo con los valores de ese objeto; al ser un objeto se utilza el metodo 'includes' que determina si hay o no algun string vacio (en otras palabras: si algun campo del formulario no se lleno
         */
    }

    function resetFormulario() {
        // Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        comprobarEmail();
        formulario.reset();
    }

});