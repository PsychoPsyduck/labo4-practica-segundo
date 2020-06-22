import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { database } from 'firebase'; // ACA
import * as firebase from 'firebase/app';
import { Usuario } from '../clases/usuario';


// import { Medico } from '../clases/medico';
// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth){}

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  public crear(usuario: Usuario) {
    if (usuario.tipo === "MEDICO") {
      database().ref('medicos')
        .push(usuario)
        .then(() => console.info("Alta exitosa"))
        .catch(() => console.info("No se pudo realizar alta"));
    }
    else {
      database().ref('usuarios')
        .push(usuario)
        .then(() => console.info("Alta exitosa"))
        .catch(() => console.info("No se pudo realizar alta"));
    }
  }
}
