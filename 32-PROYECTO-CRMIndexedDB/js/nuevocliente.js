let DB;

// Variables locales (iife)
(function() {
    
    const formulario = document.querySelector('#formulario');
    
    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        formulario.addEventListener('submit', validarCliente);

    });

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

        // Crear un objeto con la informacion 
            // Contrario al destructuing
        const cliente = {id: Date.now(), nombre, email, telefono, empresa};

        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(clientObj) {

        // Agregar el objeto a la base de datos
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(clientObj);

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        }
        transaction.oncomplete = function() {
            imprimirAlerta('Cliente agregado correctamente');
            setTimeout(() => {
                window.location.href = './index.html'
            }, 2000);
        }

    }

})();