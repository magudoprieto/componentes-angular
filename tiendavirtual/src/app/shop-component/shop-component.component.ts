import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/tienda.service';




@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})

export class ShopComponentComponent implements OnInit {

productos: any[];
carrito: any[];
  constructor(private tiendaService:TiendaService) {
  }

  ngOnInit() {
    //token no almacenado
   if(localStorage.getItam('idCarrito')){
      this.tiendaService.createCart().then(response=>{
          localStorage.setItem('idCarrito', response.json().token_cart)
      });
   }

   this.tiendaService.getAllProductos().then(response => {
     this.productos = response.json();
   });
   
  
    
      
  }
  
}
    
