import { Component, OnInit } from '@angular/core';
import { Empleados } from '../model/empleados.model';

@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.component.html',
  styleUrls: ['./listaempleados.component.css']
})
export class ListaempleadosComponent implements OnInit {

  arrEmpleados: any[]; // duda: no se si funcionara o habra que declararlo como any
  listaEmpFiltrado: Empleados[]
  constructor() { 

  	this.arrEmpleados = [
			{ nombre: 'Antonio', apellidos: 'Garcia', imagen:'../assets/images/1.png',departamento:'contabilidad',activo: true },
			{ nombre: 'Rosa', apellidos: 'Jimenez', imagen:'../assets/images/2.png',departamento:'administracion',activo: true },
			{ nombre: 'Guillermo', apellidos: 'Mora', imagen:'../assets/images/3.png',departamento:'contabilidad',activo: false },
			{ nombre: 'Pedro', apellidos: 'Gil', imagen:'../assets/images/4.png',departamento:'direccion',activo: true }
		
			];

      this.listaEmpFiltrado = this.listaEmpFiltrado;

  }

  ngOnInit() {
  }
  onDepartamentoChange($event){
    
    this.listaEmpFiltrado = [];
    if($event.target.value === 'todos'){
      this.listaEmpFiltrado = this.arrEmpleados;
    }else{

      /*for(let i = 0; i < this.arrEmpleados.length; i++){
          if(this.arrEmpleados[i].departamento === $event.target.value){
              this.listaEmpFiltrado.push(this.arrEmpleados[i]);
          }
      }*/
      this.listaEmpFiltrado = this.arrEmpleados.filter((item)=>{      //el filter siempre se aplcia sobre un array y lleva una funcion anonima
        
         return item.departamento === $event.target.value;
      });
    }
  }

}
