import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	@Input("tareas") listaTareas: Tarea[]; //se crea un array del propio modelo.

  constructor() { }

  ngOnInit() {
  	/*console.log('LISTA DE TAREAS');
  	console.log(this.listaTareas);*/

  }

  tareasAString(){
  	let output = '<ul>';

	for(let t of this.listaTareas){
			output += `<li>${t.titulo} ${t.completa}</li>`
	}

  	output += '</ul>'
  	return output;
  }

}
