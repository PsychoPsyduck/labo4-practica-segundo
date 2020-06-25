import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-listado-de-asignaturas',
  templateUrl: './listado-de-asignaturas.component.html',
  styleUrls: ['./listado-de-asignaturas.component.css']
})
export class ListadoDeAsignaturasComponent implements OnInit {

  @Output() materiaSeleccionada = new EventEmitter();
  @Input() materias;


  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
  }

  verDetalles( materia ){
    this.materiaSeleccionada.emit(materia);
  }
}
