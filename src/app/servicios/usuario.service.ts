import { Injectable } from '@angular/core';

import { database } from 'firebase'; // ACA
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios = []

  constructor() {
    this.usuarios = this.traerUsuarios();
  }

  public crear(usuario) {
    var id = usuario.mail;
    id = id.split('.').join("");

    database().ref('usuarios/' + id)
    
    database().ref('usuarios/' +id)
      .update(usuario)
      .then(() => console.info("Alta exitosa"))
      .catch(() => console.info("No se pudo realizar alta"));
  }

  public getUser(mail: string) {
    let usuario:Usuario = this.usuarios.find(x => x.mail === mail);
    if (usuario) {
      return usuario;
    }
  }

  public traerUsuarios() {
    let usuarios = [];
    database().ref('usuarios').on('value',(snapshot) => {         
      snapshot.forEach((child) =>{
        var data = child.val();
        
        usuarios.push(data);
      });
    })

    return usuarios;
  }

  public getAll(tipo: string) {
    let resultado = Array();

    switch (tipo) {
      case 'Todos':
        return this.usuarios;
      case 'Alumno':
        this.usuarios.forEach(alumno => {
          if(alumno.tipo == "Alumno") {
            resultado.push(alumno);
          }
        });
        console.log(resultado)
        return resultado;

      case 'Profesor':
        this.usuarios.forEach(alumno => {
          if(alumno.tipo == "Profesor") {
            resultado.push(alumno);
          }
        });
        console.log(resultado)
        return resultado;
        
      case 'Admin':
        this.usuarios.forEach(alumno => {
          if(alumno.tipo == "Admin") {
            resultado.push(alumno);
          }
        });
        console.log(resultado)
        return resultado;
    }
    
  }
}
