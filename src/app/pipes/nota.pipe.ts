import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  transform(input: number): string{ //string type
    if(input < 4) {
      return "Desaprobado";
    } else if (input > 3 && input < 6) {
      return "Aprobado";
    } else {
      return "Promocionado";
    }
  } 

}
