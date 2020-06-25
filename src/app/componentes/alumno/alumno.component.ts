import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumnos: Usuario[];
  borrados: Usuario[];
  alumnosAux: Usuario[];
  alumnoSeleccionado: Usuario;
  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.alumnos = this.usuarioService.getAll('Alumnos');
    this.borrados = this.usuarioService.getAll('Borrados');
    
    console.log("this.alumnos");
    console.log(this.alumnos);
  }

  enviarAlumnoSeleccionado( event ){
    this.alumnoSeleccionado = event;
  }

  eliminar( usuario ){
    console.log(usuario);
    this.usuarioService.eliminarAlumno(usuario);
    this.alumnos=this.usuarioService.getAll('Alumnos');
  }

  

}
