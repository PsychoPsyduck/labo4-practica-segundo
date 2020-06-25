import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

interface Tipos {
  value: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios;
  selectedValue = "Todos";

  tipos: Tipos[] = [
    {value: 'Todos'},
    {value: 'Alumno'},
    {value: 'Profesor'},
    {value: 'Admin'}
  ];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getAll("Todos");
    // console.log("inicio");
    // console.log(this.materias);
  }

  buscarPor() {
    console.log("selecciono: " + this.selectedValue)
    this.usuarios = this.usuarioService.getAll(this.selectedValue)
  }
}
