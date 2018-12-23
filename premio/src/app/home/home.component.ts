import { Component, OnInit } from '@angular/core';
import { PremioService } from '../premio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  premio:any;
  constructor(private premioService:PremioService) { }

  ngOnInit() {
  }

  hacerConsulta(){
    this.premioService.getPremio().then((response)=>{
      console.log(response.json());
    })
    
    //aqui se va a recibir la consulta que viene del servicio
  }

}
