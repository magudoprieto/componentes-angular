import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	personas:any[];

  constructor() { 
  	this.personas = [
  		{
  			nombre:'pepe',
  			apellidos:'Garcia',
  			puesto: 'manager',
  			activo: true
		},
		{
  			nombre:'Oscar',
  			apellidos:'Perez',
  			puesto: 'becario',
  			activo: true
		},
		{
  			nombre:'Luisa',
  			apellidos:'Sanchez',
  			puesto: 'recruit',
  			activo: false
		},
		{
  			nombre:'Manuel',
  			apellidos:'Gonzalez',
  			puesto: 'IT',
  			activo: true
		}
  	]
  }

  ngOnInit() {
  }

}
