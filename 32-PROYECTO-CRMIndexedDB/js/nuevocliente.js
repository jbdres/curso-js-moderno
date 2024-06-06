// Variables locales (iife)
(function() {
    
    let DB;
    const formulario = document.querySelector('#formulario');
    
    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        formulario.addEventListener('submit', validarCliente);

    });

    // Para conectarse a la DB se utiliza el mismo codigo de creacion ya que si existe se conecta pero si no, la crea.
    function conectarDB() {
        const abrirConextion = window.indexedDB.open('crm', 1);
        abrirConextion.onerror = function() {
            console.log('Hubo un error');
        }
        abrirConextion.onsuccess = function() {
            DB = abrirConextion.result;
        }
    }

    function validarCliente(e) {
        e.preventDefault();
        
        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if ( nombre === '' || email === '' || telefono === '' || empresa === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }


    }

    function imprimirAlerta(mensaje, tipo) {

        // Si no existe una alerta todavia la crea una sola vez
        const alerta = document.querySelector('.alerta');
        if (!alerta) {

            // Crear la alerta
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
            if (tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-200', 'text-green-700');
            }
            divMensaje.textContent = mensaje;
            formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);

        }

    }

})();