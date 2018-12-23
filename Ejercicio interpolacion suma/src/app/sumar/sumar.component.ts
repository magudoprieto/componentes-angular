import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

numeroUno:number;
numeroDos:number;
resultado:number;



  constructor() {

  	this.numeroUno = 3;
  	this.numeroDos = 6;

	
	
  }
  sumarNumeros(){
  	this.resultado = this.numeroUno + this.numeroDos;
  	console.log(this.resultado);
  	
  }
  


  ngOnInit() {
  }

}
