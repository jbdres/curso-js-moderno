/** Notificaciones nativas en JavaScript */

const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () => {
    Notification // Notification API
        .requestPermission() // Metodo que solicita al usuario el permiso de recibir notificaciones
        .then(result => console.log(result)) // granted or default
        .catch(result => console.log(result)); // denied
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {

    if (Notification.permission === 'granted') {

       const notificacion = new Notification('Github: jbdres', {
        icon: 'img/populares4.jpg',
        body: 'Alguien apasionado por el desarrollo de software y la aventura!'
       });
       notificacion.onclick = function() {
        window.open('https://github.com/jbdres');
       }
       
    }

})