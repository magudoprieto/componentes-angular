import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNegrita]'
})
export class NegritaDirective {

  constructor(private elem: ElementRef) {  //esto es la inyeccion de dependencias
  	console.log(elem.nativeElement);
  	elem.nativeElement.style.fontWeight = 'bolder';


  }

  @HostListener('mouseover') capturaMouseOver(){
  		this.elem.nativeElement.style.color = 'yellow';
  }
  @HostListener('mouseleave') capturaMouseleave(){
  		this.elem.nativeElement.style.color = 'black';
  }

}
