import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado:string;

  constructor() { 
  	 this.resultado = '';
  }

	handleClick(pNumero){
		//console.log(numero);
		this.resultado += pNumero;
  }

  resolver(){
    	this.resultado = eval(this.resultado);
  }	

  poneraCero(){
    this.resultado = '';
  }


 }
