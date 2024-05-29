// Creando un nuevo cliente por medio de una transaccion

let DB;

// Conocer los metodos para la base de datos: window.indexedDB
document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    // Esperar 5 segundos para la creacion del cliente
    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crearCliente() {
    // Utilizar las transacciones
    let transaction = DB.transaction(['crm'], 'readwrite'); // Leer y escribir datos | Solo lectura: readonly
    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    // Escribir un objeto en la base de datos
        // Obtener las columnas de la base de datos
    const objectStore = transaction.objectStore('crm');
    
    const nuevoCliente = {
        telefono: 57024398,
        nombre: 'jbdres',
        email: 'jbdres@jbdres.com'
    }

    const peticion = objectStore.add(nuevoCliente); // Guardar el objeto
    console.log(peticion);

    /**
     * * Nota:
     * - Todas las acciones como add, put o delete en indexedDB son manejadas por medio de transacciones.
     * - Si se intentara guardar el mismo objeto por una segunda vez, la transaccion generaria un error ya que como se especifico al momento de crear las tablas, el valor de las columnas de 'email' y 'telefono' no puede ser igual en dos registros distintos.
     */

}

// IndexedDB
function crmDB() {

    // Crear la base de datos
    let crmDB = window.indexedDB.open('crm', 1); // : open(nombreBaseDatos, numeroVersion);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error al crear la DB');
    }

    // Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');
        DB = crmDB.result;
    }

    // Configuracion de la base de datos (solo se ejecuta una vez aunque se vuelva a llamar)
    crmDB.onupgradeneeded = function(e) {

        const db = e.target.result; // Referencia de la base de datos
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

         // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: true})

        console.log('Columnas creadas');

    }

}