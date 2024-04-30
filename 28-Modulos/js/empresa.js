// Importar clase Cliente
import { Cliente } from "./cliente.js";
// Heredar de Cliente a Empresa y exportarla
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Soy ${this.nombre} y tengo $${this.ahorro} dolares - Categoria: ${this.categoria}`;
    }
}