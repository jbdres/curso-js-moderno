// El Objeto Date();
const diaHoy = new Date(''); // Se obtiene la fecha y hora actual

/**
 * * Nota:
 * * - Al momento de instanciar 'Date()' se le puede pasar una fecha como argumento; de esta manera: '1-5-2000' o 'January 5 2000'; Asi se obtiene alguna mas informacion de la fecha dada.
 */

/**
 * * Nota:
 * * - El objeto 'Date()' trabaja con la hora local (la del equipo).
 * * - Existen metodos 'get' para obtener propiedades concretas de la fecha y metodos 'set' para modificarlas
 * 
 * ! Recomendacion: Si en algun tipo de formulario o evento es necesario validar la fecha, es mejor acerlo desde el servidor y no desde el front porque el usuario podria cambiar la fecha del pc y con eso afectar el funcionamiento de la app.
 */


let fecha = diaHoy;
fecha = diaHoy.getFullYear(); // Año de la fecha
fecha = diaHoy.getMonth(); // Numero del mes (Cabe aclarar que empiezan desde cero: Enero=0, Febrero=1...)
fecha = diaHoy.getDate(); // Obtener el dia del mes
fecha = diaHoy.getDay(); // Obtener el dia de la semana
fecha = diaHoy.getHours(); // Numero de hora
fecha = diaHoy.getMinutes(); // Minuto en el que se encuentra
fecha = diaHoy.getSeconds(); // Numero de segundos
fecha = diaHoy.getMilliseconds(); // Numero de milisegundos
fecha = diaHoy.getTime(); // Milisegundos desde el 1 de enero de 1070 al igual que 'Date.now()'

/**
 * * Nota:
 * * - Todos los metodos anterires tienen la opcion de cambiarse con 'set()'
 */

fecha = diaHoy.setFullYear(2026);

// Salidas
console.log(fecha);
console.log(diaHoy);