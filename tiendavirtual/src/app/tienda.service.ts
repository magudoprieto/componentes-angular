import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Options } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: Http) {}

   getAllProductos(){
    return this.http.get('http://neolandshop.ngrok.io/items/').toPromise();
  }

  createCart(){
  
    return this.http.post('http://neolandshop.ngrok.io/items/newcart',{}).toPromise();
  }

  almacenarProducto(){
   let headers = new Headers;
   headers.append('Cart-Tokens','Content-Type');
   let opts = new RequestOptions();
   opts.headers = headers;
   
    return this.http.post('http://neolandshop.ngrok.io/items/new',{param1:'item_id'},opts);
  }
  
}
