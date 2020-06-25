import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-actas-de-examen',
  templateUrl: './actas-de-examen.component.html',
  styleUrls: ['./actas-de-examen.component.css']
})
export class ActasDeExamenComponent implements OnInit {

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
    console.log("Envio: " + this.materiaSeleccionada.nombre);
  }


}
