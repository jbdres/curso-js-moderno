// IndexedDB
/**
 * * Notas
 * - API en JavaScript para almacenar grandes cantidades de datos estructurados.
 * - A diferencia de LocalStorage puede almacenar strings, booleans, incluso archivos, cualqueir tipo de dato soportado por JavaScript.
 * - No tiene "limites" conocidos aunque los archivos de mas de 50mb va a preguntar por permisos.
 * - Soportada en todas las ultimas versiones de los navegadores
 * 
 * * Es diferente a LocalStorage
 * - LocalStorage es una buena solucion para almacenar poca informacion (como un carrito de compras abandonado o un JSON Web Token)
 * - IndexedDB es una base de datos copleta, pero tene en cuenta que estos datos siguen siendo visibles para cualquier por lo que no es recomendable almacenar passwords o tarjetas de credito.
 */