/** Destructurin de objetos anidados */
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponibilidad: true,
    // Primer objeto
    informacion: {
        // Segundo objeto (Dentro del primero)
        medidas: {
            alto: '40cm',
            ancho: '70cm'
        },
        // Tercer objeto (Dentro del primero)
        fabricacion: {
            pais: 'China',
            fecha: '02/04/2002'
        }
    }
};

// Sintaxis: <nombreObjeto>:{atributos} | <nombreObjeto>:{atributos, <objeto2>:{atributos}}

const {informacion} = producto; // Se guarda todo el objeto de informacion
console.log(informacion);

// ¿Acceder a valores del otro objeto?
const {informacion:{fabricacion}} = producto; // Se guarda el objeto 'fabricacion' (dentro de informacion')
console.log(fabricacion);

const {informacion:{fabricacion:{pais}}} = producto; // Se accede al objeto de fabricacion y guardamos 'pais'
console.log(pais);


// Otro ejemplo:
const {nombre, disponibilidad, informacion:{medidas:{alto, ancho}, fabricacion:{fecha}}} = producto;
// Guardando: nombre, disponibilidad, alto, ancho y fecha
