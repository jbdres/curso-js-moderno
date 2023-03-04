// Concatenar strings en JavaScript
const producto = "Monitor 20 pulgadas";
const precio = "30 USD";

// Hay varias formas para concatenar una variable (solo Strings)
/* Primera * */
console.log(producto.concat(precio));
console.log(producto.concat(' con descuento'));

/* Segunda * */
console.log("El producto " + producto + ' Tiene un precio de ' + precio);

/* Template String -> Hacemos uso de la comilla inclinada 'Back tick'*/ 
console.log(`El producto ${producto} tiene un precio de ${precio}`)


