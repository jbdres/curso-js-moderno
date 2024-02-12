// Heredar una clase
    /**
     * * Herencia: Heredar mismo atributos y mismas propiedades de una clase a otra.
     */

// Cliente es la clase padre
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente = Nombre: ${this.nombre}, Saldo: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenida al cajero';
    }
}

// Herencia | extends | Empresa es una clase hijo
class Empresa extends Cliente {
    // La clase tiene tanto el constructor de 'Empresa' como el de 'Cliente'
    constructor(nombre, saldo, telefono, categoria) { // Agregar mas atributos
        /**
         * * Cuando se modifica el constructor; se utiliza una sintaxis distinta para definir los atributos que se heredan de otra clase. Se hace con 'super()' y pasandole como argumentos los atributos a recuperar. Esto se tiene que hacer antes de usar 'this'.
         */

        super(nombre, saldo); // Super constructor | Los atributos ya se encuentran en la otra clase
        this.telefono = telefono; // Atributos agregados con normalidad
        this.categoria = categoria;
    }

    // * Cuando se define un metodo en la clase hijo que tenga el mismo nombre que otro en la clase padre; este ultimo se reescribe.
    mostrarInformacion() {
        return `Empresa = Nombre: ${this.nombre}, Saldo: ${this.saldo}, Telefono: ${this.telefono}, Categoria: ${this.categoria}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero de empresa';
    }

}

// Instancia de la primera clase
const jbdres = new Cliente('Julian', 400);
console.log(jbdres);
console.log(jbdres.mostrarInformacion());
console.log(Cliente.bienvenida());

// Instancia de la segunda clase
const empresa = new Empresa('Meta', 500, 452524, 'Tecnologia');
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());