import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materias;

  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
    this.materias = this.materiaService.getAll();
    // console.log("inicio");
    // console.log(this.materias);
  }

  altaNueva(materia){

    this.materias.push(materia);

  }
}
