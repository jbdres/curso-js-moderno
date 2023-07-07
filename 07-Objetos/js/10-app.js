/**Copiar 2 objetos */
/** Juntar dos distintos objetos en uno solo */

// Primer objeto
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

// Segundo objeto
const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Creando un tercer objeto que contenga las propiedades de los dos anteriores
// Se hace uso de 'Object.assign'
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator (Esta es mas utilizada)
/** El operador '...' basicamente nos dice que copiemos la variables que le asignamos */
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);