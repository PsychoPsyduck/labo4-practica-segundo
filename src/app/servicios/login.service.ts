import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { database } from 'firebase'; // ACA
import * as firebase from 'firebase/app';
import { Usuario } from '../clases/usuario';

import { Observable } from 'rxjs';

// import { Medico } from '../clases/medico';
// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario:Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth){
    this.usuario = this.afAuth.authState;
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.mail, value.clave)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  loginEmailUser(email:string, pass:string) {
    return new Promise((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(userData => {
        resolve(userData);
      },
      err => reject(err));
    })
  }

  logoutUser() {
    console.log("Sesion terminada");
    localStorage.removeItem("usuarioLogeado");
    return firebase.auth().signOut();
  }
}
