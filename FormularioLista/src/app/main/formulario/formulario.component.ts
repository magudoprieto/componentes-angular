import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	tarea: Tarea //a la propiedad tarea le damos la forma del modelo. Por ello hemos importado la clase tarea
  
  @Output() tareaEnviada = new EventEmitter();

  constructor() {
  		this.tarea = new Tarea('Titulo por defecto', false);
  }

  ngOnInit() {
  }

  sendTodo(){
  	let nuevaTarea = new Tarea(this.tarea.titulo, this.tarea.completa);
    this.tareaEnviada.emit(this.tarea);
  }

}
