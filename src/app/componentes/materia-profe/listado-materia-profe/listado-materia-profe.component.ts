import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-listado-materia-profe',
  templateUrl: './listado-materia-profe.component.html',
  styleUrls: ['./listado-materia-profe.component.css']
})
export class ListadoMateriaProfeComponent implements OnInit {

  @Output() materiaSeleccionada = new EventEmitter();
  @Input() materias;


  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
  }

  verDetalles( materia ){
    this.materiaSeleccionada.emit(materia);
  }
}
