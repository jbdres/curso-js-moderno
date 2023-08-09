/** Parametros por default */
/* Sin los valores por default, las funciones que no reciban argumentos, mostrarian
   los valores de las variables como: 'undefined'.
*/

function saludar(nombre = 'Desconocido', apellido = '') {
    // 'Desconocido': Es el valor por dafault para 'nombre'.
    // '': vendria siendo el valor por default para la variable de apellido
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Julian', 'Bermudez'); // Con argumentos
saludar(); // No se le dan argumentos