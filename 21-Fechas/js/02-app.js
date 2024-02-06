// MomentJS tu aliado para formatear fechas
/**
 * * Recurso: https://momentjs.com/ 
 * * -- La pagina permite manejar 'Format Dates', 'Relative Time', 'Calendar Time' y 'Multiple Local Support'; mediante ejemplos --
 */
console.log(moment());

const diaHoy = new Date();

moment.locale('es'); // Estableciendo el idioma para las fechas

/**
 * * Algunos argumentos de ejemplo (Se pueden poner por separado):
 * * - MMMM: mes
 * * - D: dia
 * * - Do: dia y simbolo
 * * - YYYY: año
 * * - h: hora
 * * - mm: minutos
 * * - ss: segundos
 * * - a: am / pm
 */

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));
console.log(moment().format('LLLL'));
console.log(moment().add(3, 'days').calendar());

/**
 * Cabe aclarar que existen mas plugins/librerias para tratar fechas, MomentJS es la mas popular.
 */