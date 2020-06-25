import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuario;
  esAlumno: boolean;
  esProfesor: boolean;
  esAdmin: boolean;

  constructor(
    private router: Router,
    public loginService: LoginService) { 
      this.esAlumno = false;
      this.esProfesor = false;
      this.esAdmin = false;
    }

  ngOnInit() {
    this.usuarioLogeado();
    this.es(this.usuario.tipo)
  }

  Router(tipo: string) {
    switch (tipo) {
      case 'Home':
          this.router.navigate(['/home']);
        break;
      case 'registroAdm':
          this.router.navigate(['/registroAdm']);
        break;
      case 'materia':
          this.router.navigate(['/materia']);
        break;
      case 'materiaAlum':
          this.router.navigate(['/materiaAlum']);
        break;
      case 'materiaProf':
          this.router.navigate(['/materiaProf']);
        break;
      case 'usuario':
          this.router.navigate(['/usuario']);
        break;
      case 'alumno':
          this.router.navigate(['/alumno']);
        break;
      case 'examen':
          this.router.navigate(['/examen']);
        break;
      case 'actas':
          this.router.navigate(['/actas']);
        break;
      case 'Salir':
          this.loginService.logoutUser();
          this.router.navigate(['']);
        break;
    }
  }

  usuarioLogeado() {

    let usuario = JSON.parse(localStorage.getItem("usuarioLogeado"));

    if(usuario != null) {
      this.usuario = new Usuario(usuario.mail, usuario.clave, usuario.tipo);
    }
  }

  es(tipo: string){
    switch (tipo) {
      case 'Alumno':
          this.esAlumno = true;
        break;
      case 'Profesor':
        this.esProfesor = true;
        break;
      case 'Admin':
        this.esAdmin = true;
        break;
    }
  }
}
