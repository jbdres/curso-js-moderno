// El operador && para revisar que se cumplan 2 o mas condiciones
const usuario = true;
const puedePagar = true;

// Una variable boolana por si sola en el condicional expresa el valor verdadero de esta.

if (usuario && puedePagar) { // El operador '&&' valida de que ambas expresiones sean verdaderas
                             // Si 'usuario' es verdadero, al igual que 'puedePagar'
    console.log("Si puedes comprar");
} else if (!usuario) { // '!': Valida el valor contrario de la variable
                       /**
                        * usuario=true, !usuario -> false
                        * Logica del codigo, el usuario tiene que ser falso para que al evaluarlo
                        *   este sea verdadero y entre al condicional. El falso de la variable en
                        *   un inicio podria llegar a indicar que el usuario no esta registrado en
                        *   la aplicacion.
                        */

    console.log("Inicia sesion o crea una cuenta");
} else if (!puedePagar) {
    console.log("Fondos insuficientes");
} else {
    console.log("No puedes comprar");
}