import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swicth',
  templateUrl: './swicth.component.html',
  styleUrls: ['./swicth.component.css']
})
export class SwicthComponent implements OnInit {

	opcionSeleccionada: string;

  constructor() { }

  ngOnInit() {
  }

  handleOnChange($event){
  	//console.log($event.target.value);
  	this.opcionSeleccionada = $event.target.value; //solo se puede extrapolar al html de swicth porque es una propiead que solo conoce la clase.
  }

}
