import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-materia-alum',
  templateUrl: './materia-alum.component.html',
  styleUrls: ['./materia-alum.component.css']
})
export class MateriaAlumComponent implements OnInit {

  materias;

  constructor(public materiaService: MateriaService) { }

  ngOnInit(): void {
    this.materias = this.materiaService.getAllMateriasUsuario();
    // console.log("inicio");
    // console.log(this.materias);
  }

  altaNueva(materia){

    this.materias.push(materia);

  }

}
