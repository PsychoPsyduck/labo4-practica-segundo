import { Injectable } from '@angular/core';
import { database } from 'firebase'; // ACA
import { Materia } from '../clases/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  public materias = []
  public usuario;
  public materiasUsuario = []

  constructor() {
    this.traerMaterias();
    this.materias = JSON.parse(localStorage.getItem("materias"));

    this.usuario = JSON.parse(localStorage.getItem("usuarioLogeado"));
    this.traerMateriasUsuario();
    this.materiasUsuario = JSON.parse(localStorage.getItem("materiasUsuario"));
  }

  public crear(materia) {
    var id = materia.nombre + "-" + materia.cuatrimestre;
    id = id.split('.').join("");
    
      return new Promise<any>((resolve, reject) => {
        database().ref('materias/' + id)

        database().ref('materias/' +id)
          .update(materia)
          .then(res => {
            resolve(res);
          }, err => reject(err))

      })
  }

  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.mail, value.clave)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }

  public getMateria(nombre: string) {
    let materia:Materia = this.materias.find(x => x.nombre === nombre);
    if (materia) {
      return materia;
    }
  }

  public getAll() {
    return this.materias;
  }

  public traerMaterias() {
    
    let materias = [];
    console.log("trae")
    database().ref('materias').on('value',(snapshot) => {         
      snapshot.forEach((child) =>{
        var data = child.val();
        materias.push(data);
      });
      localStorage.setItem('materias', JSON.stringify(materias));
    })
  }

  public traerMateriasUsuario() {
    let materias = [];
    var idInscripto = this.usuario.mail;
    idInscripto = idInscripto.split('.').join("");

    if(this.usuario.tipo == "Alumno") {
      database().ref('materias').on('value',(snapshot) => {         
        snapshot.forEach((child) =>{
          var data = child.val();
          // data.inscriptos.forEach(element => {
          //   if(element == idInscripto){
          //     materias.push(data);
          //   }
          // });
          console.log(data.inscriptos);
        });
        localStorage.setItem('materiasUsuario', JSON.stringify(materias));
      })
    } else if(this.usuario.tipo == "Profesor") {
      database().ref('materias').on('value',(snapshot) => {         
        snapshot.forEach((child) =>{
          var data = child.val();
          if(data.profesor == this.usuario.mail) {
            materias.push(data);
          }
        });
        localStorage.setItem('materiasUsuario', JSON.stringify(materias));
      })
    }
  }

  public getAllMateriasUsuario() {
    return this.materiasUsuario;
  }

  update(materia, aux) {
    var id = materia.nombre + "-" + materia.cuatrimestre;
    id = id.split('.').join("");

    var idInscripto = aux.alumno;
    idInscripto = idInscripto.split('.').join("");

    return new Promise<any>((resolve, reject) => {

      // database().ref('materias/' + id + "/inscriptos");

      database().ref('materias/' + id + "/inscriptos/" + idInscripto)
        .update(aux)
        .then(res => {
          resolve(res);
        }, err => reject(err))

    })
  }
}


