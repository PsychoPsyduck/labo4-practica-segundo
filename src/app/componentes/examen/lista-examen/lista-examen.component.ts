import { Component, OnInit, Input } from '@angular/core';
import { ExamenService } from 'src/app/servicios/examen.service';

@Component({
  selector: 'app-lista-examen',
  templateUrl: './lista-examen.component.html',
  styleUrls: ['./lista-examen.component.css']
})
export class ListaExamenComponent implements OnInit {

  @Input() examenes;


  constructor(public examenService: ExamenService) { }

  ngOnInit(): void {
    // this.getMaterias();
  }

  // getMaterias() {
  //   this.materias = null;
  //   this.materias = this.materiaService.getAll();
  //   console.log(this.materias);
  // }



}
