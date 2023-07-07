/** Recorrer un array */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];
console.table(meses);

// Obtener la cantidad de elementos
console.log(meses.length);

// Recorrer: Con un iterador
// For loop
for (let i = 0; i < meses.length; i++) {
    const element = meses[i];
    console.log(element);
}

// (Esto se vera mas adelante pero es una forma mas facil de recorrer el array)
meses.forEach(mes => {
    console.log(mes);
});