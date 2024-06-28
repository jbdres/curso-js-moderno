// Detectar cuando la pagina web se esta ejecutando en primer o segundo plano
/**
 * * Nota:
 * - Este tipo de codigo se pueden utilizar para simplemente cambiar el nombre de la pagina web o para determinar y reaunidar procesos mientras el usuario vuelve a entrar a la pagina, un ejemplo de ello es instagram, que detiene y reanuda los reels hasta el usuario vuelva.
 */

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    if (document.visibilityState === 'visible') {
        document.title = 'Document';
    } else {
        document.title = 'No te vayas! Vuelve!';
    }
});


// Otra forma de utiliza
/* let previousTitle = document.title;

window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = 'No te vayas! Vuelve!';
});

window.addEventListener('focus', () => {
    document.title = previousTitle;
}); */
