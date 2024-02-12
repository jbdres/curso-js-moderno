// Modificadores de Acceso | Propiedades Privadas en JavaScript

// Clase
class Cliente {

    /**
     * * - Los atributos privados solamente son accesibles dentro de la clase a la cual pertenecen; pudiendo solamente ser modificados por metodos get() y objetidos con set().
     * * - Para cuando se quiera tratar el atributo, es necesario poner el '#'.
     */

    #nombre; // Haciendo el atributo 'nombre' privado

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    // --------------------------

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() { // Metodo dentro de la clase
        return `Cliente = Nombre: ${this.#nombre}, Saldo: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenida al cajero';
    }
}

// Instancia
const jbdres = new Cliente('Julian', 400);

console.log(jbdres);
console.log(jbdres.nombre); // undefined | 'nombre' no existe
    // console.log(jbdres.#nombre); // Error: No se puede acceder a la propiedad fuera de la clase
console.log(jbdres.mostrarInformacion());


// Accediendo y modificando la propiedad correctamente
console.log(jbdres.getNombre()); // Julian
jbdres.setNombre('Andres');
console.log(jbdres.getNombre()); // Andres

// Final
console.log(jbdres);