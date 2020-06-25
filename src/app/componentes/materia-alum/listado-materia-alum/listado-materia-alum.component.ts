import { Component, OnInit, Input } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-listado-materia-alum',
  templateUrl: './listado-materia-alum.component.html',
  styleUrls: ['./listado-materia-alum.component.css']
})
export class ListadoMateriaAlumComponent implements OnInit {

  @Input() materias;


  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
  }

}
