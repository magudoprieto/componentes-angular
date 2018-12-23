import { Component, OnInit,Input } from '@angular/core';
import { Empleados} from '../../model/empleados.model';

@Component({
  selector: 'app-detalleempleados',
  templateUrl: './detalleempleados.component.html',
  styleUrls: ['./detalleempleados.component.css']
})
export class DetalleempleadosComponent implements OnInit {



@Input() emple: Empleados; 


  
  constructor() { }

  ngOnInit() {
  }

  cambiarEstado($event){
  		this.emple.activo = !this.emple.activo;
  }



}
