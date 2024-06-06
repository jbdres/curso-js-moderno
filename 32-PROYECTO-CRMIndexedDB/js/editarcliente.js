let DB;

(function() {

    let idCliente;
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB();

        // Actualizar el formulario
        formulario.addEventListener('submit', actualizarCliente);

        // Verificar el id de la URL
        /**
         * * Notas:
         * - Query String: Pasar informacion mediante la direccion de la pagina, esto mediante parametros. 
         * console.log(window.location.search); // Obtener el Query

         * - Usar la API 'URLSearchParams' para obtener los parametros disponibles en la URL
         */
        const parametrosUrl = new URLSearchParams(window.location.search);
        idCliente = parametrosUrl.get('id'); // Se pasa como argumento el parametro del cual se quiere obtener el valor

        if (idCliente) {
            // * Nota;
            // Retrasar la llamada a la funcion para que se de prioridad a 'conectarDB()' y no genere error; ya que la funcion a retrasar hace uso de la conexion a la base de datos, pero si no se ha dado oportunidad de que primero se conecte a esta, se genera error. De forma rapida se soluciona con un setTimeOut pero esto se hace realmente con Promises y Asyn await, temas futuros del curso.
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100)
        }

    })

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly'); // Tambien sirve como permiso 'readwrite'
        const objectStore = transaction.objectStore('crm');
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value)
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function actualizarCliente(e) {

        e.preventDefault();

        if ( nombreInput.value === '', emailInput.value === '', telefonoInput.value === '', empresaInput.value === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Actualizar cliente
        const clienteActualizado = {
            id: Number(idCliente),
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            imprimirAlerta('Cliente actualizado correctamente');
            setTimeout(() => {
                window.location.href = './index.html';
            }, 2000)
        }
        transaction.onerror = function() {
            imprimirAlerta('Hubo un error al actualizar', 'error');
        }

    }

})();