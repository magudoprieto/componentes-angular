import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
estilosParrafo: any;
tamanoFuente:number;
cambioClase: boolean;

	constructor(){
		this.tamanoFuente = 14;
		this.estilosParrafo = {
			color: 'red',
			fontSize: this.tamanoFuente+'px'

		}
		this.cambioClase = true;

	}

	modificarFuente(pBoolean){
		this.tamanoFuente = (pBoolean) ? this.tamanoFuente +2 : this.tamanoFuente-2;
		this.estilosParrafo.fontSize = this.tamanoFuente+'px';
	}
	handleClick(){
		this.cambioClase = !this.cambioClase;
	}

}
