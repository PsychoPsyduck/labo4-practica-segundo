export class Usuario {
    mail: string;
    clave: string;
    tipo: string;
    date: Date;

    constructor(mail: string, clave: string, tipo: string) {
        this.mail = mail;
        this.clave = clave;
        this.tipo = tipo;
    }
}
