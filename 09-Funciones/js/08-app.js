/** Ejemplo con multiples funciones que se pasan valores */
// Aqui se hace uso de funciones que retornan datos; al igual hacen uso de parametros y argumentos

function primera(usuario) {
    const valor = segunda(usuario);
    return `Este es el mensaje de la segunda funcion: /${valor}/`;
}

function segunda(usuario) {
    return `Este es el mensaje de la tercera funcion: '${tercera(usuario)}'`;
}

function tercera(usuario = '-sin nombre-') {
    return `Hola ${usuario}`;
}

console.log(primera(prompt('Nombre:')));
