const producto = "Monitor 20 pulgadas"; // También sirve con comillas simples ''
const producto2 = String("Monitor 24 pulgadas");
const producto3 = new String("Monitor 28 pulgadas"); // Esta forma practicamente no se usa.

console.log(producto);
console.log(producto2);
console.log(producto3);


// Reglas para definir los 'Strings'
// Usar commillas dentro de un 'String':
const comillasIguales = "Palabra con \"comillas dobles\"."; 
    /* Nota: Esto es de esta manera si las comillas a poner son las mismas 
             con las que abrimos y cerramos el 'String'.*/
             
const comillasSencillas = 'Palabra con \'comillas sencillas\'.';           
console.log(comillasIguales + " y " + comillasSencillas);

const comillasDistintas = 'Ambos tipos de "comillas".';
console.log(comillasDistintas);

