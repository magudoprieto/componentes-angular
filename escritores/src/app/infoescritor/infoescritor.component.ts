import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../model/escritor.model';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-infoescritor',
  templateUrl: './infoescritor.component.html',
  styleUrls: ['./infoescritor.component.css']
})
export class InfoescritorComponent implements OnInit {

  escritorSelec: Escritor;
  constructor(private activatedRoute: ActivatedRoute, private escritoresService: EscritoresService) { //se inyecta el activate router
    //Este metodo recupera los parametros de la url
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params.idEscritor);
      //transformo el parametro que me interesa en numero
      let idEscritor = parseInt(params.idEscritor);
      //recupera el objeto escritor en función de su id
      this.escritoresService.getEscritorByIdPromise(idEscritor).then((escritorSeleccionado)=>{
        this.escritorSelec = escritorSeleccionado;
      
      });
      
    });

    

   }

  ngOnInit() {
  }

}
