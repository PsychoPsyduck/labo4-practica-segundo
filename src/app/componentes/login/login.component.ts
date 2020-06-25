import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription, BehaviorSubject} from "rxjs";

import { LoginService } from '../../servicios/login.service';
// import { Usuario } from '../../clases/usuario';

import { AuthService } from './../../auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
// import { UsuarioService } from 'src/app/servicios/usuario.service';

//import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  mail = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;

  recaptcha: any;
  user;

  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService, 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
    // private usuarioService: UsuarioService
    ) {
      this.Tiempo=5; 
      this.ocultarVerificar=false;
    }

    public loginForm: FormGroup = this.formBuilder.group({
      mail: new FormControl('', [ Validators.email,Validators.required]),
      clave: new FormControl('', [Validators.minLength(6), Validators.required]),
      // apellido: new FormControl('', [ Validators.minLength(3), Validators.required]),
    });

  ngOnInit() {
  }

  tryLogin(value){
    console.log("mail: " + value.mail);
    console.log("clave: " + value.clave);
    // console.log("tipo: " + value.tipo);

    
    this.ocultarVerificar=true;

    this.loginService.loginEmailUser(value.mail, value.clave)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Cuenta autorizada";
      this.authService.login().subscribe(resp => {

        let usuario = this.usuarioService.getUser(value.mail);

        localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
        this.router.navigate(['home']);
      });
      // this.usuarioService.subirImagenes(this.imagenUno, value.email,1);
      // this.usuarioService.subirImagenes(this.imagenDos,value.email,2);
      // localStorage.setItem("usuarioLogeado", JSON.stringify(value));
      // this.router.navigate(['home']);

    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })

    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.ocultarVerificar=false;
        console.log(this.ocultarVerificar);
        this.Tiempo=5;
      }
    }, 900);
  }

  resolved(captchaResponse: any) {
    this.recaptcha = captchaResponse;
    console.log(this.recaptcha);
  }
  
}
