// Que es el Proto y como crear un tipo de objeto nuevo

/**
 * * Todos los objetos tienen un Prototype (Funciones exclusivas de ese tipo de objeto)
 */

// Forma en la que se crea el objeto: Object Literal (no es tan dinamico)
const cliente = { // 
    nombre: 'jbdres',
    saldo: 500
};
console.log(cliente);

// Crear un objeto que se pueda reutiliza (Object constructor)
    /**
     * Esto es lo que se hacia antes eN JavaScript para la POO
     */
    // Constructor del objeto
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jbdres = new Cliente('Julian', 10000);
console.log(jbdres);