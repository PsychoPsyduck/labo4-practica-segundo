import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/servicios/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  examenes;

  constructor(public examenService: ExamenService) { }

  ngOnInit(): void {
    this.examenes = this.examenService.getAll();
  }

  altaNueva(examen){

    this.examenes.push(examen);

  }

}
