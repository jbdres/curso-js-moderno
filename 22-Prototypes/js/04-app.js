// Heredar un prototype (La herencia en POO)

// ------------------------- Objeto y prototypes a heredar -------------------------
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    const saldo = this.saldo;
    if (saldo > 10000) {
        tipo = 'Gold';
    } else if (saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira;
}

// ------------------------- Objeto al que se hereda -------------------------

// Propiedades / Atributos
function Persona(nombre, saldo, telefono) {
    /* this.nombre = nombre; // Manera comun de definir las propiedades del objeto (Es lo mismo)
    this.saldo = saldo; */

    Cliente.call(this, nombre, saldo); // Heredando del objeto 'Cliente' los atributos nombre y saldo especificamente.
    this.telefono = telefono;
}

// Prototypes / Metodos
Persona.prototype = Object.create(Cliente.prototype); // Los prototipos del objeto cliente se asignan a los prototipos del objeto persona, gracias a 'Object.create()'

    /**
     * * Nota: Al heredar cada uno de los prototipos de un objeto, tambien se sobreescribe el constructor por lo cual a este momento el objeto persona tiene el constructor de clientes; lo que significa que solo incluye a 'nombre' y 'saldo'.
     */


Persona.prototype.constructor = Cliente;

/**
 * * Nota: El codigo en el que se heredan cada uno de los protipos a un objeto, tiene que ir antes de inicializar dicho objeto; Generaria un error.
 */

// Creando un prototype distinto
Persona.prototype.mostrarTelefono = function() {
    return this.telefono;
}

// Inicializacion
const kevin = new Persona('Kevin', 5000, 52894375);
console.log(kevin.mostrarTelefono()); // Prototype propio
console.log(kevin.nombreClienteSaldo()); // Prototype heredado

// Observacion completa del objeto que hereda
console.log(kevin);