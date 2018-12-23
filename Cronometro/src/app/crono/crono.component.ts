import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  @Input()numero: number
  @Output()finished = new EventEmitter()

  count: number
  contando: boolean

  constructor() {     
    this.numero = 15
    this.contando = false
  }

  ngOnInit() {
    this.count = this.numero
  }

  startCount(){
    this.count = this.numero
    this.contando = true
    let interval = setInterval(()=>{
      this.count--
      if(this.count <= 0){
        clearInterval(interval)
        this.contando = false
        this.finished.emit('Ha terminado el cronómetro')
      }
    }, 1000)
  }

}
 

