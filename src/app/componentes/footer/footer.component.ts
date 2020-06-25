import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mensaje:string;

  constructor() { }

  ngOnInit(): void {
    // this.usuarioLogeado()
  }

  // usuarioLogeado() {

  //   let usuario = JSON.parse(localStorage.getItem("usuarioLogeado"));

  //   if(usuario == null) {
  //     this.mensaje = "Bienvenido usuario."
  //   }
  //   else {
  //     this.mensaje = "Usuario en linea: " + usuario.mail;
  //   }
    
  // }
}
