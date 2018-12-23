import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/tienda.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  carrito:any;
  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
  

  
  }
}



