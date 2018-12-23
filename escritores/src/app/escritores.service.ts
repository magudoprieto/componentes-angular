import { Injectable } from '@angular/core';
import { ESCRITORES } from './data/escritores.db';
import { Escritor } from './model/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(){               //con este metodo estamos cogiendo todos los datos de la constante ESCRITORES
    return ESCRITORES;
  }
  getAllPromise(): Promise<Escritor[]>{    //esto devuelve una promesa
    /*let prom = new Promise<Escritor[]>((resolve,reject)=> {
      resolve(ESCRITORES);
    });*/
    return Promise.resolve(ESCRITORES);
  }

  getEscritorById(id): Escritor {
    /*let arrTem = ESCRITORES.filter((item: Escritor)=>{
        return item.id === id;
    });
    return arrTem[0];*/

    return ESCRITORES.filter(item => item.id === id)[0]; //esta linea aquivale a arrTem
  }

  getEscritorByIdPromise(id): Promise<Escritor>{
    /*let prom = new Promise((resolve,reject)=> {
        resolve(ESCRITORES.filter(item => item.id === id)[0]);
    });
    return prom*/
    
    return Promise.resolve(ESCRITORES.filter(item => item.id === id)[0]);
  }

}

