import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listado-alumno-borrado',
  templateUrl: './listado-alumno-borrado.component.html',
  styleUrls: ['./listado-alumno-borrado.component.css']
})
export class ListadoAlumnoBorradoComponent implements OnInit {

  @Output() alumnoSeleccionado = new EventEmitter();

  @Input() borrados; 
  constructor() { }

  ngOnInit(): void {

  }

  verDetalles( alumno ){
    this.alumnoSeleccionado.emit(alumno);
  }

}
