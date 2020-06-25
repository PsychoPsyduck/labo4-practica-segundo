import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-listado-de-aprobacion-directa',
  templateUrl: './listado-de-aprobacion-directa.component.html',
  styleUrls: ['./listado-de-aprobacion-directa.component.css']
})
export class ListadoDeAprobacionDirectaComponent implements OnInit {

  @Input() detalleMaterias:Materia[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
