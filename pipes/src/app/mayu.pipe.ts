import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayu'
})
export class MayuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  
    /*return `${value.charAt(0).toUpperCase()}${value.substring(1,value.length)
      .toLowerCase()}`;*/

      //Si queremos que cada palabra esté en mayusculas. Lo primero es divirdir el string en un a rray de palabras
      let words = value.split(' ');
      let newwords = words.map((item)=>{
        return `${item.charAt(0).toUpperCase()}${item.substring(1,item.length)
          .toLowerCase()}`
      });
      return newwords.join(' ');
  }

}
