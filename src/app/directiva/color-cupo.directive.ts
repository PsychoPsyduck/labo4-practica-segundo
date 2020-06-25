import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorCupo]'
})
export class ColorCupoDirective {
  
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
        

        this.directiva();
        this.Tiempo=5;
      }
    }, 10);
    
  }
  

  directiva(){
    var x = this.element.nativeElement.textContent;
    var y: number = +x;

    console.log("x")
    console.log(x)
    console.log("y")
    console.log(y)
    
    if(y > 9 && y < 20) {
      this.element.nativeElement.style.color = "yellow";
    } else if (y > 19) {
      this.element.nativeElement.style.color = "blue";
    } else {
      this.element.nativeElement.style.color = "red";
    }
  }
}
