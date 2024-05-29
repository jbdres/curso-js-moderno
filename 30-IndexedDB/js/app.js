// Creando las Tablas

// Conocer los metodos para la base de datos: window.indexedDB
document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

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