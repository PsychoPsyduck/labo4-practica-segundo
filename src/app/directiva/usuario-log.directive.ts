import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUsuarioLog]'
})
export class UsuarioLogDirective {

  mensaje:string;

  element: ElementRef;
  Tiempo: number;
  repetidor:any;

  constructor(private el: ElementRef) {
    this.element = el;
    this.Tiempo=1; 
  }

  ngOnInit() {
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        

        this.usuarioLogeado();
        this.element.nativeElement.innerText += " " + this.mensaje
        this.Tiempo=5;
      }
    }, 10);
    
  }

  usuarioLogeado() {

    let usuario = JSON.parse(localStorage.getItem("usuarioLogeado"));

    if(usuario == null) {
      this.mensaje = "Bienvenido usuario."
    }
    else {
      this.mensaje = "Usuario en linea: " + usuario.mail;
    }
    
  }
}
