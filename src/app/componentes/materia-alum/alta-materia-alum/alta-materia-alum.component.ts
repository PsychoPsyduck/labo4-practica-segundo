import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Materia } from 'src/app/clases/materia';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-alta-materia-alum',
  templateUrl: './alta-materia-alum.component.html',
  styleUrls: ['./alta-materia-alum.component.css']
})
export class AltaMateriaAlumComponent implements OnInit {

  @Output() nuevaAlta = new EventEmitter();

  materia;
  nombre = '';
  cuatrimestre = '';
  cupos = 0;
  profesor = '';
  errorMessage = '';
  successMessage = '';
  selectedValue = "Todos";
  listaMaterias: Materia[];
  usuario;

  constructor(public materiaService: MateriaService, private formBuilder:FormBuilder) { }

  public registerForm: FormGroup = this.formBuilder.group({
    nombre: new FormControl('', [Validators.minLength(6), Validators.required])
  });

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuarioLogeado"));
    this.cargarMaterias();
  }

  tryRegister(value){
    let auxs = new Array();
    let materia = new Materia("", "", 0, "", auxs, "")

    this.listaMaterias.forEach(element => {
      if(element.nombre == value) {
        materia = element;
      }
    });
    
    // let aux = this.usuario.mail;

    // if(materia.inscriptos == ""){
    //   materia.inscriptos = aux;
    // } else {
    //   materia.inscriptos += ","+aux;
    // }
    let aux = new Nota();
    aux.alumno = this.usuario.mail;
    // aux.nota = 0;

    // materia.inscriptos.push(aux);

    this.materiaService.update(materia,aux)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Inscripcion correcta";
      
      this.nuevaAlta.emit(materia);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    });
    
  }

  cargarMaterias() {
    this.listaMaterias = this.materiaService.getAll();
  }
}
