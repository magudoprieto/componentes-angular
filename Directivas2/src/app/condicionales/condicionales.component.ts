import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

	mostrar: boolean;

  constructor() {
   this.mostrar = false;

  }

  ngOnInit() {
  }

  changeMostrar(){
  	this.mostrar = !this.mostrar;
  }

}
