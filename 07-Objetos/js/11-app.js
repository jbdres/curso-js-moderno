/** Funciones de objetos y acceder a sus valores */

// al hacer uso de 'this', hacemos referencia a los valores que existen dentro del mismo objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,

    // Creando una funcion
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();

// Esta sintaxis funciona para el objeto en el que se encuentre
const producto2 = {
    nombre: 'Tablet',
    precio: '150',
    disponible: false,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto2.mostrarInfo();