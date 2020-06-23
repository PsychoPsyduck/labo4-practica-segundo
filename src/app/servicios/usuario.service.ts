import { Injectable } from '@angular/core';

import { database } from 'firebase'; // ACA

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public crear(usuario) {
    var id = usuario.mail;
    id = id.split('.').join("");

    if (usuario.tipo === "MEDICO") {
      database().ref('medicos/' + id);

      database().ref('medicos/' +id)
        .update(usuario)
        .then(() => console.info("Alta exitosa"))
        .catch(() => console.info("No se pudo realizar alta"));
    }
    else {
      database().ref('usuarios/' + id)
      
      database().ref('usuarios/' +id)
        .update(usuario)
        .then(() => console.info("Alta exitosa"))
        .catch(() => console.info("No se pudo realizar alta"));
    }
  }

  
}
