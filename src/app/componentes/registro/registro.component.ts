import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Usuario } from 'src/app/clases/usuario';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { LoginService } from '../../servicios/login.service';
import { UsuarioService } from '../../servicios/usuario.service'
// import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

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
  repitaClave= '';
  terminosCondiciones: boolean;
  img1 = null;
  img2;
  errorMessage = '';
  successMessage = '';

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
    // apellido: new FormControl('', [ Validators.minLength(3), Validators.required]),
  });

  public register2Form: FormGroup = this.formBuilder.group({
    mail: new FormControl('', [ Validators.email,Validators.required]),
    clave: new FormControl('', [Validators.minLength(6), Validators.required]),
    // apellido: new FormControl('', [ Validators.minLength(3), Validators.required]),
  });

  ngOnInit() {
  }

  Volver() {
    this.router.navigate(['/Login']);
  }

  Registrar() {
    
  }

  onFileSelected(event) {
    this.img1 = event.target.files[0];
  }

  
  tryRegister(value){
    console.log("mail: " + value.mail);
    console.log("clave: " + value.clave);
    // console.log("tipo: " + value.tipo);

    this.loginService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Cuenta autorizada";

      // this.usuarioService.subirImagenes(this.imagenUno, value.email,1);
      // this.usuarioService.subirImagenes(this.imagenDos,value.email,2);
      this.usuarioService.crear(value);

      this.router.navigate(['']);

    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
