import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {
  @Input() beb: Producto;
  @Output() roc = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  clickBebida(){
    this.roc.emit(this.beb);
  }

}
