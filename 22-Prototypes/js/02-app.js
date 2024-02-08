// El problema de no usar Prototypes
// Prototype: Determinar funciones exclusivas para ciertos objetos

// Problema:
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

const jbdres = new Cliente('jbdres', 1000);
formatearCliente(jbdres);

    // Otro objeto
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const ccl = new Empresa('Cursos con Juan', 4000, 'Cursos en linea');
console.log(formatearCliente(ccl)); // Como podemos ver, una funcion dedicada a cliente esta siendo usada para el objeto empresa, algo que no seria del todo correcto; ahi entran los prototypes, dar exclusividad de uso

// Lo ideal para el objeto 'empresa' seria:
function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y su categoria es ${categoria}`;
};

console.log(formatearEmpresa(ccl));