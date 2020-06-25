import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  @Output() eliminarAlumno = new EventEmitter()
  @Input() detalleAlumno:Usuario
  constructor() { }

  ngOnInit(): void {
  }

  borrarAlumno(){
    
    this.eliminarAlumno.emit ( this.detalleAlumno);
    this.eliminarAlumno=null;
  }

}
