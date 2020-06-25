import { Nota } from './nota';

export class Materia {
    nombre: string;
    cuatrimestre: string;
    cupos: number;
    profesor: string;
    inscriptos: Nota[];
    foto: string;

    constructor(nombre: string, cuatrimestre: string, cupos: number, profesor: string, inscriptos: Nota[], foto: string) {
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.profesor = profesor;
        this.inscriptos = inscriptos;
        this.foto = foto;
    }
}
