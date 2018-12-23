import { Component, OnInit,Input } from '@angular/core';
import { Empleado } from '../../../app/model/empleado.model';

@Component({
  selector: 'app-detalleempledos',
  templateUrl: './detalleempledos.component.html',
  styleUrls: ['./detalleempledos.component.css']
})
export class DetalleempledosComponent implements OnInit {

	@Input() emple: Empleado;


  constructor() {


  }

  ngOnInit() {
  }

  cambiarEstado($event){
  		this.emple.activo = !this.emple.activo;
  }

}
