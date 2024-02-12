// Metodos y Metodos estaticos en las clases

class Cliente {
    constructor(nombre, saldo) {
        this.nombre =  nombre;
        this.saldo = saldo;
    }

    // Metodos
        /**
         * * Los metodos no estaticos se agregan al prototype del objeto/instancia
         */
    mostrarInformacion() {
        return `Cliente: Nombre: ${this.nombre}, Saldo: ${this.saldo}`;
    }

    // Metodos estaticos
        /**
         * * - Para mostrarlas no requieren una instancia; se utilizar solamente con el nombre de la clase.
         * * - Si el metodo se llama desde una instancia, se genera un error.
         * * - No se agregan al prototype.
         */
    static bienvenida() {
        return `Bienvenida al cajero`;
    }
}

// Instancia
const jbdres = new Cliente('Julian', 400);

// Salidas
console.log(jbdres);
console.log(jbdres.mostrarInformacion()); // Metodo normal
console.log(Cliente.bienvenida()); // Metodo estatico