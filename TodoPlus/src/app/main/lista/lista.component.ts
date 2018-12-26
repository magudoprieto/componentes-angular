import { Component, OnInit,Input } from '@angular/core';
import { Tarea } from 'src/app/model/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

@Input() tareas: Tarea[];


  constructor() {
   
   }

  ngOnInit() {
    console.log(this.tareas);
  }

  borrar(data:number){
      this.tareas.splice(data,data+1);
  }

}
