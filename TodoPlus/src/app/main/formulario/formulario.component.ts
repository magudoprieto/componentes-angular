import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	titulo: string;
  completa: boolean;
  tarea: Tarea; //a la propiedad tarea le damos la forma del modelo. Por ello hemos importado la clase tarea
  
  @Output() tareaEnviada = new EventEmitter();

  constructor() {
  		this.tarea = new Tarea('Titulo por defecto', true);
  }

  ngOnInit() {
  }

  sendTodo(){
    
  	
    let t = new Tarea(this.titulo, this.completa);
    //console.log(this.titulo, this.completa); Se reciben los datos del formulario
    this.tareaEnviada.emit(t);
  }

}