import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  @Input() com: Producto;
  @Output() rec = new EventEmitter;
  
  constructor() {
   
   }

  ngOnInit() {
  }

  recibirClick(){
    this.rec.emit(this.com);
  }
 

}
