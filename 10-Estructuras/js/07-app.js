/** El operador OR para que se cumpla al menos una condicion 
 * * A diferencia del operador 'and', este operador solamente valida que por lo menos una de las
 * * condiciones propuestas sea verdadera.
*/

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalAPagar || credito > totalAPagar) { // (Se pueden poner mas condiciones)
    /**
     * * efectivo > totalAPagar // false
     * * credito > totalAPagar // true (Entra al if, si alguna de las dos es 'true') 
     */
    console.log("Puedes pagar por cualquier medio (Efectivo / credito)");
} else {
    console.log("Fondos insuficientes");
}

