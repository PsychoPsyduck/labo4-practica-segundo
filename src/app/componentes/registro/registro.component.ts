import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Usuario } from 'src/app/clases/usuario';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { LoginService } from '../../servicios/login.service';
import { UsuarioService } from '../../servicios/usuario.service'
// import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';

interface Tipos {
  value: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  
  nombre = '';
  apellido = '';
  mail = '';
  clave= '';
  clave2= '';
  repitaClave= '';
  usuario;
  terminosCondiciones: boolean;
  img = null;
  errorMessage = '';
  successMessage = '';

  selectedValue = "";

  tipos: Tipos[] = [
    {value: 'Alumno'},
    {value: 'Profesor'}
  ];

  // usuario: Usuario = new Usuario(this.nombre, this.apellido, 40, this.mail, this.clave, '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService,
    public usuarioService: UsuarioService,
    private formBuilder:FormBuilder) {
  }

  public registerForm: FormGroup = this.formBuilder.group({
    mail: new FormControl('', [ Validators.email,Validators.required]),
    clave: new FormControl('', [Validators.minLength(6), Validators.required]),
    clave2: new FormControl('', [Validators.minLength(6), Validators.required]),
    tipo: new FormControl('', [ Validators.minLength(3), Validators.required]),
  });

  ngOnInit() {
  }

  Volver() {
    this.router.navigate(['/Login']);
  }

  onFileSelected(event) {
    this.img = event.target.files[0];
  }

  
  tryRegister(value){
    console.log("mail: " + value.mail);
    console.log("clave: " + value.clave);
    console.log("tipo: " + value.tipo);

    if(value.clave == value.clave2 ) {
      this.usuario = new Usuario(value.mail, value.clave, value.tipo)

      this.loginService.doRegister(this.usuario)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Cuenta autorizada";
  
        // this.usuarioService.subirImagenes(this.imagenUno, value.email,1);
        // this.usuarioService.subirImagenes(this.imagenDos,value.email,2);
        this.usuarioService.crear(this.usuario, this.img);
  
        this.router.navigate(['']);
  
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
    } else if (value.clave != value.clave2){
      this.errorMessage = "Las claves no coinciden"
    } else if (this.selectedValue == ""){
      this.errorMessage = "Seleccione un tipo"
      console.log(this.selectedValue)
    }
    
  }
}
