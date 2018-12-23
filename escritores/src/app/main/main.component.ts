import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../model/escritor.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  propescritores: Escritor[];

  constructor(private escritoresService: EscritoresService){
    
  }

  ngOnInit() {
    this.propescritores = this.escritoresService.getAll()
    //console.log(escritores);
  
  }

}
