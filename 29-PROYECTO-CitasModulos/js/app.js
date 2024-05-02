import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from "./selectores.js";
    // Importar funciones
import { datosCita, submitCita } from "./funciones.js";

// Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)
formulario.addEventListener('submit', submitCita)

/**
 * * Las variables se han movido a ./variables.js
 */

/**
 * * Las funciones se han movido a ./funciones.js
 */