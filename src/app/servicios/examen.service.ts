import { Injectable } from '@angular/core';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  public examenes = []

  constructor() { 
    this.traerExamenes();
    this.examenes = JSON.parse(localStorage.getItem("examenes"));
  }

  public crear(examen, img) {
    var id = examen.nombre + "-" + examen.cuatrimestre;
    id = id.split('.').join("");
    
      return new Promise<any>((resolve, reject) => {
        database().ref('examenes/' + id).push().then(res => {

          
        })
        
        database().ref('examenes/' +id)
          .update(examen)
          .then(res => {
            resolve(res);
          }, err => reject(err))

      })
  }

  public getAll() {
    return this.examenes;
  }

  public traerExamenes() {
    
    let examenes = [];
    console.log("trae")
    database().ref('examenes').on('value',(snapshot) => {         
      snapshot.forEach((child) =>{
        var data = child.val();
        examenes.push(data);
      });
      localStorage.setItem('examenes', JSON.stringify(examenes));
    })
  }
}
