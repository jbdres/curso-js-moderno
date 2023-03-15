/* Destructurin de un objeto * */

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

/* ¿Cual es la idea de todo esto? guardar los atributos del objeto y ponerlos en variables independientes */

/* Forma comun
const nombre = producto.nombre;
console.log(nombre); */

// Nota: Como se ve, tenemos dos lineas de codigo (para una sola variable)

/* Forma actual (Se puede utilizar tanto para una sola como para varios atributos (claro que el nombre de las variables tiene que ser el mismo de los atributos para que el editor reconozca a la cual se hace referencia))* */

const {nombre, disponible} = producto; // Entre corchetes damos el nombre de las variables para retirar | Igualamos al objeto del cual se extraen los datos.
console.log(nombre); // Referencia a las variables y no a los atributos del objeto
console.log(disponible); 