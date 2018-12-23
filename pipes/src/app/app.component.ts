import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 currentDate: Date;
 msg: Promise<string>;
 constructor(){
   this.currentDate = new Date;
 }

 ngOnInit(){
   this.msg = this.recuperaDatos();
 }

 recuperaDatos(){
    let prom = new Promise<string>((resolve,reject)=>{
        setTimeout(()=> {
          resolve('Ha terminado la promesa');
        },3000);
    });
    return prom
  }
}
