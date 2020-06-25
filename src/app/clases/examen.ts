import { Nota } from './nota';

export class Examen {
    
    alumno: string;
    nota: number;
    fecha: Date;

    constructor(alumno: string, nota: number, fecha: Date) {
        this.alumno = alumno;
        this.nota = nota;
        this.fecha = fecha;
    }
}
