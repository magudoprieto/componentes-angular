import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cronometro';

  handleFinished(){
  	console.log('Ha terminado de contar el cronometro');
  }

}
