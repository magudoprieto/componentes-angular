import { Injectable } from '@angular/core';
import { LIBROS } from './data/libros.db';
import { Libro } from './model/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() {


  }

  getLibrosByEscritor(idEscritor){
      LIBROS.filter((item)=>{
        return item.escritor === idEscritor;
      })
  }
}
