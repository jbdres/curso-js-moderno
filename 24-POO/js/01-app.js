// Definiendo e instanciando una clase
/**
 * * Notas:
 * * - Gracias a que la implementacion de las clases es relativamente nueva para JavaScript; no se posee una funcionalidad en estas tan grande como si lo es en Java, por ejemplo.
 * * - Si se quiere acercar a un gran proceso de clases en JavaScript, se recomienda usar TypeScript.
 * * - Antes de la POO, lo unico que se usaba eran los prototypes.
 * * - Hay dos formas de declarar clases en JavaScript, una mas comun que la otra.
 */


// Class Declaration
class Cliente { // Forma comun de usar clases
    constructor(nombre, saldo) { // El constructor tiene el mismo nombre que la clase
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

    // Instancia
const jbdres = new Cliente('Julian', 400);
console.log(jbdres);



// Class Expression
const Cliente2 = class { //  !Esta manera no es tan usada como 'Class Declaration'
    constructor(nombre, saldo) { // El constructor se declara de la misma forma
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
    // Instancia
const jbdres2 = new Cliente2('Julian', 400); // La instancia se hace de la misma manera
console.log(jbdres2);
