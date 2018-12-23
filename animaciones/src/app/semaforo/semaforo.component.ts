import { Component, OnInit } from '@angular/core';
import { trigger, state, style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css'],
  animations: [
    trigger('cambioColor', [
      state('go', style({
        'background-color': 'green'
      })),
      state('stop', style({
        'background-color': 'red'
      })),
      state('warning', style({
        'background-color':'orange'
      })),
      transition('* => *', animate(1000)) //de cualquier estado a cualquier otro

    ])
  ]
})
export class SemaforoComponent implements OnInit {

  estadoSemaforo:string;

  constructor() {

    this.estadoSemaforo = 'go';

   }

  ngOnInit() {
    setInterval(()=>{
      switch(this.estadoSemaforo){
        case 'go':
        this.estadoSemaforo = 'warning';
        break;
        case 'warning':
        this.estadoSemaforo = 'stop';
        break;
        case 'stop':
        this.estadoSemaforo = 'go';
        break;
      }
    },5000);
  
  }

  onStateChange(newstate){
    this.estadoSemaforo = newstate;
  }

}
