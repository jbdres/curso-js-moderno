import { generarId } from "./funciones.js";

/** Cuando se habilitan los modulos de EcmaScript, cuando se tiene una variable global como esta 'let editando = false; , la va a tratar como constante, esto se soluciona asi: */
let editando = {
    value: false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
};