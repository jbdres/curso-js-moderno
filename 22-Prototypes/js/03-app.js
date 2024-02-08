// Creando un Prototype
/**
 * * Nota: Se recuerda que al crear un prototype para un objeto en concreto; dicho objeto sera el unico con acceso al prototype. Se podria decir que un prototype funciona como los a los que tiene acceso el objeto.
 */

// Definiendo objeto 'Cliente' mediante Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Creaciond el prototype
    /** Sintaxis: nombreObjeto.prototype.nombrePrototype = function() {} */
    /**
     * * Nota: Para definir un prototype se usan las funciones anonimas en vez de un array function; gracias a que estas nos permiten acceder al contenido del objeto mediante 'this'. En cambio si se hiciera de esta manera con un arrow function, con 'this' accederia a los datos de la ventana y no de la instancia.
     * 
     * Con arrow function: console.log(this.nombre); // undefined
     */

Cliente.prototype.tipoCliente = function() {

    // Objetivo del prototype: Categorizar al cliente de acuerdo a su saldo en una cuenta
    let tipo;
    const saldo = this.saldo;

    if (saldo > 10000) {
        tipo = 'Gold';
    } else if (saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    this.tipo = tipo;
    return tipo;

}

// Instancia del objeto
const jbdres = new Cliente('julian', 30000);
console.log(jbdres.tipoCliente()); // Gold // El prototype funciona como un metodo del objeto;

// Al imprimir el objeto en la seccion de Prototype se observa el que se acabo de crear 
console.log(jbdres);

// --------------------------------------------------------------------------------------------

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipo}`;
}
console.log(jbdres.nombreClienteSaldo());

Cliente.prototype.retiraSaldo = function(valor) {
    this.saldo -= valor;
    return this.nombreClienteSaldo();
}

console.log(jbdres.retiraSaldo(2000));
console.log(jbdres);
