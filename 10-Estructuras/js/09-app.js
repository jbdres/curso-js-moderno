/** Operador Ternario */

/**
 * Explicacion:
 * * Primera parte: Expresion booleana (La que sea)
 * * Segunda parte: '?' y el codigo para el valor verdadero
 * * Tercera parte: ':' y el codigo para el valor falso
 */

const autenticado = true;
console.log(autenticado ? "Si esta autenticado" : "No esta autenticado");

// Si queremos que para el caso de falso, no se ejecute ninguna accion
console.log(!autenticado ? "Si esta autenticado" : null);

// Es posible hacer operadores ternarios

const puedePagar = true;
console.log(autenticado ? /* Primer ternario | verdadero */ puedePagar ? "Si esta autenticado y puede pagar" : "Si esta autenticado y no puede pagar" /* Primer ternario | verdadero */ : "No esta autenticado");