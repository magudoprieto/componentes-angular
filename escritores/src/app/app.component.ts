import { Component } from '@angular/core';
import { EscritoresService } from './escritores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private escritoresService: EscritoresService){
    
  }
  ngOnInit(){
    //let escritores = this.escritoresService.getAll()
    //console.log(escritores);

    //this.escritoresService.getAllPromise().then((arrEscritores)=>{
      //console.log(arrEscritores);
    //})
  }

}
