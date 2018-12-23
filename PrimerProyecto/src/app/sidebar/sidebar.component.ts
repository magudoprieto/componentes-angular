import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

	idFirstItem: string;

  constructor() {
  	this.idFirstItem = 'El primer elemento';
   }

   hadlerClick($event){
   		console.log('BOTON PULSADO');
   }
  
}
