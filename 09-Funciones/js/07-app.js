/** Como se Comunican las funciones */

iniciarApp(); // Llamandola antes de ser inicalizada

function iniciarApp() { // Siempre debe haber una primera funcion que de paso a las demas
    console.log('Iniciando app...');

    segundaFuncion(); // Llamando a la segunda función
}

function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Pablo'); // Llama a la tercera funcion con parametros
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`${usuario} autenticado correctamente`);
}