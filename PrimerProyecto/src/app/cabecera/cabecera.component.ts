import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {


	@Input()saludo: string; //con el imput le decimos al html que la variable saludo es un atributo de la etiqueta
	suma: number;

	constructor() { 
		this.saludo = 'Nuevo saludo';  //Ya dentro del constructor inicializao la variable
		this.suma = 15+6;
		setTimeout(()=>{
			this.saludo = 'Nuevo Saludo';
		},3000)
	}

	despedir():string {
		return 'Esta es la despedida';
	}
}
