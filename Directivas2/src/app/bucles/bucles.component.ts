import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

	episodios: any[];

	alumnos: any[];


	constructor() {
	
		this.episodios = [

			{ title: 'Winter Is Coming', director: 'Tim Van Patten' },
			{ title: 'The Kingsroad', director: 'Tim Van Patten' },
			{ title: 'Lord Snow', director: 'Brian Kirk' },
			{ title: 'Cripples, Bastards, and Broken Things', director:
			'Brian Kirk' },
			{ title: 'The Wolf and the Lion', director: 'Brian Kirk' },
			{ title: 'A Golden Crown', director: 'Daniel Minahan' },
			{ title: 'You Win or You Die', director: 'Daniel Minahan' },
			{ title: 'The Pointy End', director: 'Daniel Minahan' }
			];

		this.alumnos = [
			{nombre:'Marcos',apellidos:'Agudo',asignaturas: ['algebra','electronica','calculo II']},
			{nombre:'Rosa',apellidos:'Lopez',asignaturas: ['calculo II','electronica','lengua']},
			{nombre:'Pedro',apellidos:'Gonzalez',asignaturas: ['Robotica','Programacion','electronica']}
		];
	}

  ngOnInit() {
  

  }

}
