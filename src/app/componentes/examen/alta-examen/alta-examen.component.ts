import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Examen } from 'src/app/clases/examen';
import { ExamenService } from 'src/app/servicios/examen.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-examen',
  templateUrl: './alta-examen.component.html',
  styleUrls: ['./alta-examen.component.css']
})
export class AltaExamenComponent implements OnInit {

  @Output() nuevaAlta = new EventEmitter();

  examen;
  nombre = '';
  cuatrimestre = '';
  cupos = 0;
  profesor = '';
  errorMessage = '';
  successMessage = '';
  img = null;

  constructor(public examenService: ExamenService, private formBuilder:FormBuilder) { }

  public registerForm: FormGroup = this.formBuilder.group({
    alumno: new FormControl('', [Validators.minLength(6), Validators.required]),
    nota: new FormControl('', [Validators.max(10), Validators.required])
  });

  ngOnInit(): void {
  }

  tryRegister(value){
    console.log("nombre: " + value.alumno);
    console.log("cuatrimestre: " + value.nota);
    let fecha = new Date();

    this.examen = new Examen(value.alumno, value.nota, fecha)

    this.examenService.crear(this.examen, this.img)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Examen creado";
      
      this.nuevaAlta.emit(this.examen);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
