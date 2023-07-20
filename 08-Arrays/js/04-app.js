/** Agregar nuevos valores a un array */
// A pesar de que un arreglo se haya declarado como constante, aun así se puede modificar

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

meses[0] = 'Nuevo mes';
meses[8] = 'Septiembre'; // Agregar un nuevo elemento
meses[11] = 'Diciembre' // Agregar elemento en una posicion mas adelante (De la posicion 8 pasamos a la 11, JavaScript no crea la 9 ni la 10; pero si los tiene en cuenta para determinar la longitud del array)

// Imprimiento el array
console.table(meses);