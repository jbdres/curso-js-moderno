// Mayor o igual y else if

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

/** Notas:
 * - Siempre se va a ejecutar la primera condicion que se cumpla
 * - Para que una condicion se cumpla, las condiciones anteriores
 * - El 'else' se ejecuta siempre y cuando ninguan de las condiciones previas se cumpla
 */

// Primera condicion
if (dinero >= totalAPagar) {
    console.log("Si podemos pagar");
} else if (cheque) { // Segunda condicion
    console.log("Si tengo un cheque");
} else if (tarjeta) { // Tercera condicion
    console.log("Si puedo pagar porque tengo la tarjeta");
} else { 
    console.log("Fondos insuficientes");
}