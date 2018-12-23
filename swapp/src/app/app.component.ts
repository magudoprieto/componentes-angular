import { Component } from '@angular/core';
import { SwService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swapp';
  planetas: any[];
  pelis: any[];
    constructor(private swService: SwService){

    }

    ngOnInit(){
      this.swService.getAllPlanets().subscribe((response)=>{
      this.planetas = response.json().results;
      console.log(response.json().results);
      
        });
      /*this.swService.getPlanetsFilm().subscribe((response)=>{
        this.pelis = response.json().results;
        console.log(response.json().results);
      });*/
        
    }

   
}
