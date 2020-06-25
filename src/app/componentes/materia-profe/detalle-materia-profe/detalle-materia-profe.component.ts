import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-detalle-materia-profe',
  templateUrl: './detalle-materia-profe.component.html',
  styleUrls: ['./detalle-materia-profe.component.css']
})
export class DetalleMateriaProfeComponent implements OnInit {

  @Input() detalleMateria:Materia
  constructor() { }

  ngOnInit(): void {
    
    console.log("llego")
  }

}
