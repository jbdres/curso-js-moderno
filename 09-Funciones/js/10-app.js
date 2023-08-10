/** Arrow Functions */
// Estas es otra forma de declarar funciones | Esta función se añade desde ES6 (ECMAScript 6)

// Declaracion normal: Function Expression
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}
aprendiendo();

// Declaración conn Arrow Functions
const aprendiendo2 = () => { // La palabra reservada 'function' se cambia por '=>' y pasa a estar después de los paréntesis
    console.log('Aprendiendo JavaScript');
}
aprendiendo2();

// Si para la funcion, solamente hay una linea de codigo se pueden omitir las llaves
const aprendiendo3 = () => 'Aprendiendo JavaScript';
    // Al hacerlo de esta manera ya se toma como automativo el retornar esta linea
    console.log(aprendiendo3()); // Salida: Aprendiendo JavaScript


    /** 
     * ! No hacerlo de esta manera
     * const aprendiendo3 = () => console.log('Aprendiendo JavaScript');
     * console.log(aprendiendo3()); // Salida: undefined
     */