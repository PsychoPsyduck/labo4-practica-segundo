import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Materia } from 'src/app/clases/materia';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  @Output() nuevaAlta = new EventEmitter();

  materia;
  nombre = '';
  cuatrimestre = '';
  cupos = 0;
  profesor = '';
  errorMessage = '';
  successMessage = '';
  img = null;

  constructor(public materiaService: MateriaService, private formBuilder:FormBuilder) { }

  public registerForm: FormGroup = this.formBuilder.group({
    nombre: new FormControl('', [Validators.minLength(2), Validators.required]),
    cuatrimestre: new FormControl('', [Validators.minLength(6), Validators.required]),
    cupos: new FormControl('', [Validators.minLength(6), Validators.required]),
    anio: new FormControl('', [Validators.min(2020), Validators.required]),
    profesor: new FormControl('', [ Validators.minLength(3), Validators.required]),
  });

  ngOnInit(): void {
  }

  tryRegister(value){
    console.log("nombre: " + value.nombre);
    console.log("cuatrimestre: " + value.cuatrimestre);
    console.log("cupos: " + value.cupos);
    console.log("profesor: " + value.profesor);
    let inscripto = new Array;

    this.materia = new Materia(value.nombre, value.cuatrimestre, value.cupos, value.profesor, inscripto, "", value.anio)

    this.materiaService.crear(this.materia, this.img)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Materia creada";
      
      this.nuevaAlta.emit(this.materia);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  onFileSelected(event) {
    this.img = event.target.files[0];
  }
}
