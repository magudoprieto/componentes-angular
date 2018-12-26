import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [
  		new Tarea('Sacar la basura',true),
  		new Tarea('pasear al perro',true),
  		new Tarea('poner la lavadora',false)
  	];
   }

  ngOnInit() {
  	

  }

  agregarTarea(tareaRecibida){
    //console.log(this.arrTareas); Se reciben las tareas del componente hijo
    this.arrTareas.push(tareaRecibida);
  }

}
