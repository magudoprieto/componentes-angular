import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../app/model/empleado.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	arrEmpleados: Empleado[];

  constructor() {

  	this.arrEmpleados = [
  	new Empleado ('Marcos','Agudo',37,'direccion','url',true),
  	new Empleado ('Rosa','Lopez',45,'contabilidad','url',false),
  	new Empleado ('Pedro','Giron',27,'administracion','url',true),
  	new Empleado ('Luisa','Martin',34,'direccion','url',false),
  	new Empleado ('Guillermo','Ramos',56,'contabilidad','url',true),
  	new Empleado ('Federico','Sanchez',20,'administracion','url',false),
  	new Empleado ('Maria','Gomez',23,'contabilidad','url',true),
  	new Empleado ('Ona','Carbonell',27,'contabilidad','url',true),
  	new Empleado ('Vago','Singanas',18,'contabilidad','url',false)
  	]

  }

  ngOnInit() {
  console.log(this.arrEmpleados);
  }

  

}
