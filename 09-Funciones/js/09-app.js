/** Añadir Funciones en un Objeto */
/* Se les conoce como metodos de propiedad por que la sintaxis en la que se llaman a estas
   funciones son las mismas que las de un metodo */

const reproductor = { // Objeto
    reproducir: function(id) { // Este seria tambien el primer atributo del objeto
        console.log(`Reproduciendo cancion, id: ${id}...`);
    },

    pausar: function() {
        console.log(`Pausando...`)
    }
}

// Como se puede observar la forma en la que se llaman, es la misma para acceder a un metodo
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// Creando un nuevo metodo de propiedad
reproductor.borrar = function(id) {
    console.log(`Borrando cancion... ${id}`);
}

reproductor.borrar();