import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  @Output() alumnoSeleccionado = new EventEmitter();

  @Input() alumnos; 
  constructor() { }

  ngOnInit(): void {

  }

  verDetalles( alumno ){
    this.alumnoSeleccionado.emit(alumno);
  }

}
