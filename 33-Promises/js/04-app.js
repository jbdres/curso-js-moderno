/** De Callback Hell a Promises */

const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado ${pais}.`);
    }, 3000);
});

nuevoPais('Colombia')
    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Alemania');
    })
    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Italia');
    })
    .then(result => {
        console.log(result);
        console.log(paises);
    })