/** Object Constructor */
// Una mejor forma de crear objetos (Automatizarlo)

// Object literal (Entre las dos maneras presentadas en la clase, este es mas utilizado)
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

// Object constructor
function Producto(nombre, precio) {
    // Definir las variables que va a tomar el objeto; el this hace referencia a las propiedades del nuevo objeto
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// De esta manera es mucho mas facil crear varios objetos
const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(typeof(producto2)); // De tipo objeto
console.log(producto2);

const producto3 = new Producto('Tablet', 150);
console.log(producto3);

const producto4 = new Producto('Mouse', 150);
console.log(producto4);