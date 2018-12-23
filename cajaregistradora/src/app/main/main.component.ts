import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Producto } from '../../app/models/producto.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  arrComida: Producto[];
  arrBebida: Producto[];
  platoRecibido: Producto;
 
  

  constructor() {
    this.arrComida = [
        new Producto('Carne',30,'../../assets/images/carne.jpg'),
        new Producto('Pescado',15,'../../assets/images/pescado.jpg'),
        new Producto('Pizza',8,'../../assets/images/pizza.jpg'),
        new Producto('Postre',3,'../../assets/images/postre.jpg'),
        new Producto('Entrantes',6,'../../assets/images/entrante.jpg'),
        new Producto('Tapa',4,'../../assets/images/tapa.jpg')
    ];

    this.arrBebida = [
        new Producto('Agua mineral',3,'../../assets/images/agua.jpg'),
        new Producto('Vino',8,'../../assets/images/vino.jpg'),
        new Producto('Cerveza',2,'../../assets/images/cerveza.jpg')
    ];

   }

  ngOnInit() {
  }

  recibirComida($event){
    this.platoRecibido = $event;
    console.log(this.platoRecibido);
  }

  recibirBebida($event){
    this.platoRecibido =$event;
    console.log(this.platoRecibido);
  }

}
