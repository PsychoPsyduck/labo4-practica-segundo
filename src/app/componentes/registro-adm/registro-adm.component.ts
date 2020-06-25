import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registro-adm',
  templateUrl: './registro-adm.component.html',
  styleUrls: ['./registro-adm.component.css']
})
export class RegistroAdmComponent implements OnInit {

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
  tipo = "Admin"
  selectedValue = "";


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
    console.log("tipo: " + this.tipo);

    if(value.clave == value.clave2 ) {
      this.usuario = new Usuario(value.mail, value.clave, this.tipo)

      this.loginService.doRegister(this.usuario)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Cuenta autorizada";
        localStorage.removeItem("usuarioLogeado");
  
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
    } 
    
  }

}
