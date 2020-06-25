import { Injectable } from '@angular/core';

import { database } from 'firebase'; // ACA
import { Usuario } from '../clases/usuario';
import { UploadService } from './upload.service';

interface UsuarioElim {
  mail: string
  clave: string
  tipo: string
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios = []
  public alumnos = []
  public borrados = []
  usuarioElim: UsuarioElim;

  constructor(public uploadService: UploadService) {
    this.usuarios = this.traerUsuarios();
    this.alumnos = this.traerAlumnos();
    this.borrados = this.traerBorrados()
  }

  public crear(usuario, img) {
    var id = usuario.mail;
    id = id.split('.').join("");

    database().ref('usuarios/' + id)
    
    database().ref('usuarios/' +id)
      .update(usuario)
      .then(() => {
        usuario = this.uploadImg(usuario, img);
        console.info("Alta exitosa")
      })
      .catch(() => console.info("No se pudo realizar alta"));
  }
  public uploadImg( usuario: Usuario, imagen){
    this.uploadService.subirArchivo(usuario.mail+"_img1",imagen,{nombre:usuario.mail}).then((img)=>{
       img.ref.getDownloadURL().then(data=>{
        usuario.foto=data;
        console.log(data);


        var id = usuario.mail;
        id = id.split('.').join("");

        database().ref('usuarios/' +id)
          .update(usuario)
          .then(res => {
            // .then(function (docRef) {
              // this.uploadImg(materia, img);
              // materia = this.uploadImg(materia, img);
              console.log("llegar llegue");
            // });
            // resolve(res);
          })//, err => reject(err))
       });  
    });
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

  public traerAlumnos() {
    let usuarios = [];
    database().ref('usuarios').on('value',(snapshot) => {         
      snapshot.forEach((child) =>{
        var data = child.val();
        if(data.tipo == "Alumno") {

          usuarios.push(data);
        }
      });
    })

    return usuarios;
  }

  public traerBorrados() {
    let usuarios = [];
    database().ref('usuariosElim').on('value',(snapshot) => {         
      snapshot.forEach((child) =>{
        var data = child.val();
        
        usuarios.push(data);
      });
    })

    return usuarios;
  }

  public getAll(tipo: string) {
    let resultado = Array();
    console.log("tipo es: " + tipo);
    
    switch (tipo) {
      case 'Todos':
        return this.usuarios;
      case 'Alumnos':
        return this.alumnos;
      case 'Borrados':
        return this.borrados;
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

  public eliminarAlumno(usuario) {
    var id = usuario.mail;
    id = id.split('.').join("");
    
    usuario.date = new Date();
    
    database().ref('usuarios/' +id)
      .remove()
      .then(() => this.crearEliminado(usuario));
  }


  public crearEliminado(usuario) {
    var id = usuario.mail;
    id = id.split('.').join("");

    database().ref('usuariosElim/' + id)
    
    database().ref('usuariosElim/' +id)
      .update(usuario)
      .then(() => console.info("Alta exitosa"))
      .catch(() => console.info("No se pudo realizar alta"));
  }
}
