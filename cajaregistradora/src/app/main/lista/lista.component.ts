import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() platos: Producto;
  resultado: number;
 
 
  constructor() {
    this.platos;
    this.resultado = 0;
   }

  ngOnInit() {
  }
  
  sumar(){
    this.resultado += this.platos.precio;
  }
 

}
