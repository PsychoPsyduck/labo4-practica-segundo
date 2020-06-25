import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-listado-no-directa',
  templateUrl: './listado-no-directa.component.html',
  styleUrls: ['./listado-no-directa.component.css']
})
export class ListadoNoDirectaComponent implements OnInit {

  @Input() detalleMaterias:Materia[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
