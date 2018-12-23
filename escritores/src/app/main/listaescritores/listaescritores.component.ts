import { Component, OnInit,Input } from '@angular/core';
import { Escritor } from 'src/app/model/escritor.model';


@Component({
  selector: 'app-listaescritores',
  templateUrl: './listaescritores.component.html',
  styleUrls: ['./listaescritores.component.css']
})
export class ListaescritoresComponent implements OnInit {

  @Input() arrLista: Escritor[];
  constructor() { 
    
    
  }
  ngOnInit() {
    console.log(this.arrLista);
  }

}
