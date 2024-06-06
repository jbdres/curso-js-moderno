// Variables de forma local en JavaScript (iife)
(function() {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
        
        // Comprobar que la base de datos exista para obtener clientes
        if (window.indexedDB.open('crm', 1)) {
            obtenerClientes();
        }

    });

    // Crea la base de datos de indexedDB
    function crearDB() {

        const crearDB = window.indexedDB.open('crm', 1);
        crearDB.onerror = function() {
            console.log('Hubo un error');
        }
        crearDB.onsuccess = function() {
            DB = crearDB.result;
        }

        crearDB.onupgradeneeded = function(e) {

            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

            // Columnas
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: false });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB Lista y creada');

        }

    }

    function obtenerClientes() {
        
        const abrirConexion = window.indexedDB.open('crm', 1);
        abrirConexion.onerror = function(e) {
            console.log('Hubo un error');
        }
        abrirConexion.onsuccess = function(e) {
            
            DB = abrirConexion.result;
            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;
                if (cursor) {

                    const {id,nombre, empresa, email, telefono} = cursor.value;

                    const listadoClientes = document.querySelector('#listado-clientes');
                    listadoClientes.innerHTML += `
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <p class="text-gray-700">${telefono}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                            <p class="text-gray-600">${empresa}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                        </td>
                    </tr>
                    `;
                    cursor.continue();
                    
                } else {
                    console.log('No hay mas registros');
                }
            }

        }
 
    }

})();