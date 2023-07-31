/** La diferencia entre la Function expression y Declaration */

// Function Declaration
    // Nota: La función se puede llamar antes de que sea inicializada
sumar();
function sumar() {
    console.log(2+2);
}

// Function Expression
    // Nota: La función no se puede llamar antes de que se inicialice
sumar2()
const sumar2 = function() {
    console.log(3+3);
}

/**
 * ¿Por qué sucede de esa manera?
 * 
 * Al momento de que se compila código JavaScript, sucede un procedimiento
 * llamado 'Hoisting', que consta de dos etapas (por decirlo así).
 * La primera etapa es creación, en donde se registran (en este caso) las
 * funciones antes de ser llamadas.
 * 
 * En la segunda etapa, gracias a que nuestra función ya se encuentra
 * registrada (de alguna manera) es posible llamarla antes de que sea
 * inicializada.
 * 
 * ---------------------------------------------------------------------
 * 
 * Pero para estos casos en concreto, la primera función (sumar) aplica al
 * hoisting, en cambio para la segunda función (sumar2) gracias a la forma
 * en la que se declara (como si fuera una variable) no se registra en la
 * etapa de creación por lo cual al llamarla en la segunda, es imposible
 * obtener respuesta alguna; a menos que se llame antes de inicializarla.
 * 
 */