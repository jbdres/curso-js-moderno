/** Que es un WeakSet y en que se diferencia de un Set? */
/**
 * * Nota:
 * * - A diferencia del Set, en el que se puede guardar cualquier tipo de dato; el WeakSet solamente recibe objetos
 * * - No puedes conocer el tamano del WeakSet
 * * - No se puede iterar
 */

const weakset = new WeakSet();

const cliente = {
    nombre: 'Julian',
    saldo: 200
}

const nombre = 'Kevin';

/**
 * * Nota: WeakSet solamente tiene 3 metodos.
 */
weakset.add(cliente);
// weakset.add(nombre); // Genera un error, ya que el valor a guardar no es valido
weakset.has(cliente);
weakset.delete(cliente)

console.log(weakset);