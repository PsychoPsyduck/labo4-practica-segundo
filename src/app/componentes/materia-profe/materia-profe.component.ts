import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-materia-profe',
  templateUrl: './materia-profe.component.html',
  styleUrls: ['./materia-profe.component.css']
})
export class MateriaProfeComponent implements OnInit {

  materias;
  materiaSeleccionada: Materia;

  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
    this.materias = this.materiaService.getAllMateriasUsuario();
    // console.log("inicio");
    // console.log(this.materias);
  }

  enviarMateriaSeleccionada( event ){
    this.materiaSeleccionada = event;
  }

  // altaNueva(materia){

  //   this.materias.push(materia);

  // }

}
