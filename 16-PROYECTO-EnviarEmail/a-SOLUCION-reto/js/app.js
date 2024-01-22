document.addEventListener('DOMContentLoaded', function () {

    // ----------------------- variables -----------------------
    // formulario
    const formulario = document.querySelector('#formulario');
    // inputs
    const inputCC = document.querySelector('#cc');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    // botones
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    // spinner
    const spinner = document.querySelector('#spinner');
    // datos finales
    const email = {
        cc : '',
        email : '',
        asunto : '',
        mensaje : ''
    }

    // ----------------------- eventos -----------------------
    formulario.addEventListener('submit', enviarEmail);
    inputCC.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    // ----------------------- funciones -----------------------
    function enviarEmail(e) {
        e.preventDefault();
        btnSubmit.disabled = true;
        btnSubmit.classList.add('opacity-50');
        
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
            resetFormulario();

            const alertaExito = document.createElement('P');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 2000);

        }, 3000);
    }
    
    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        resetFormulario();
    });

    function validar(e) {
        if (!(e.target.id === 'cc') && e.target.value.trim() === '') {
            mostrarAlerta(`El ${e.target.name} no puede estar vacio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }

        if ((e.target.id === 'email' || e.target.id === 'cc') && !validarEmail(e.target.value)) {
            mostrarAlerta(`El ${e.target.name} no es valido`, e.target.parentElement);
            if (e.target.id === 'cc' && e.target.value === '') {
                limpiarAlerta(e.target.parentElement);
            }
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }
        
        limpiarAlerta(e.target.parentElement);
        email[e.target.id] = e.target.value.trim().toLowerCase();
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        const error = document.createElement('P');
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        error.textContent = mensaje;
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        const array = Object.values(email);

        if ((inputCC.value != '' && !validarEmail(inputCC.value)) || array.slice(1, array.length + 1).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
    }

    function resetFormulario () {
        email.cc = '';
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
    }

});