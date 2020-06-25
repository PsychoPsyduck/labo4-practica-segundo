import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  @Input() usuarios;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // this.getMaterias();
  }

  // getUsuarios() {
  //   this.usuarios = null;
  //   this.usuarios = this.usuarioService.getAll();
  //   console.log(this.usuarios);
  // }


}
