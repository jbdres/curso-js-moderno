// Eventos al dar scroll con el mouse
// Todo lo que sucede en la pagina se encuestra con: window (ventana global)

window.addEventListener('scroll', () => {

    // Cantidad de scrolling que se da verticalmente
    const scrollPX = window.scrollY; // Cantidad de pixeles a los que se les ha dado scroll (arriba o abajo)
    // console.log(scrollPX);

    // Obtener informacion de la ubicacion de un elemento a medida que se va haciendo scroll
    // (Se puede saber si el elemento ya es visible en pantalla)
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    
    /** 
     * * Se obtiene la siguiente informacion:
     * - Distancia a la que se encuentra el elemento
     * - Altura y ancho de la informacion
     * - Coordenadas de ubicacion
     */
    
    //console.log(ubicacion); // Nota: sirve para debuguear en el proceso de desarrollo
    
    // Saber si se visualiza en pantalla
    if(ubicacion.top < 784) { // '784' se refiere a los pixeles
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aun no, da mas scroll')
    }

});