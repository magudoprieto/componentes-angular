import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*let newStr = '';
    for(let i = 0;i<value.length;i++){
      newStr = value.charAt(i) + newStr; //metodo para obtener el caracter contenido en un indice dentro del string
    }
    return newStr;*/
    let newStr = '';
    Array.from(value).map((item)=>{     //crea un array con cada uno de los caracteres del array
        newStr = item + newStr;
    }); 
    return newStr;

  }

}
