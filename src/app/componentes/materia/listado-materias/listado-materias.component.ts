import { Component, OnInit, Input } from '@angular/core';
import { MateriaService } from '../../../servicios/materia.service'

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  @Input() materias;


  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
    // this.getMaterias();
  }

  // getMaterias() {
  //   this.materias = null;
  //   this.materias = this.materiaService.getAll();
  //   console.log(this.materias);
  // }


}
