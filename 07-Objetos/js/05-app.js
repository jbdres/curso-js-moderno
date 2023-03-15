/** Objetos anidados */
// El nivel de objetos dentro de otros puede ser tan extenso como sea necesrio

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponibilidad: true,
    // Primer objeto
    informacion: {
        // Segundo objeto (Dentro del primero)
        medidas: {
            alto: '40cm',
            ancho: '70cm'
        },
        // Tercer objeto (Dentro del primero)
        fabricacion: {
            pais: 'China',
            fecha: '02/04/2002'
        }
    }
};


console.log(producto);

// Acedemos a los distintos niveles del objeto mediante la 'Sintaxis punto'
console.log(producto.informacion);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);

// Si hacemos referencia a un elemento que no existe, sencillamente devuelve 'undefined' o nada.
console.log(producto.fabricacion);