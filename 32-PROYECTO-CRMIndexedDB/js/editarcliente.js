(function() {

    let DB;

    const nombreInput = document.querySelector('#nombre');

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB();

        // Verificar el id de la URL
        /**
         * * Notas:
         * - Query String: Pasar informacion mediante la direccion de la pagina, esto mediante parametros. 
         * console.log(window.location.search); // Obtener el Query

         * - Usar la API 'URLSearchParams' para obtener los parametros disponibles en la URL
         */
        const parametrosUrl = new URLSearchParams(window.location.search);
        const idCliente = parametrosUrl.get('id'); // Se pasa como argumento el parametro del cual se quiere obtener el valor

        if (idCliente) {
            // * Nota;
            // Retrasar la llamada a la funcion para que se de prioridad a 'conectarDB()' y no genere error; ya que la funcion a retrasar hace uso de la conexion a la base de datos, pero si no se ha dado oportunidad de que primero se conecte a esta, se genera error. De forma rapida se soluciona con un setTimeOut pero esto se hace realmente con Promises y Asyn await, temas futuros del curso.
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 10)
        }

    })
    
    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);
        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        }
        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }

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
        const { nombre } = datosCliente;
        nombreInput.value = nombre;
    }

})();