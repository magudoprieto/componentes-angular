import { Component, OnInit,Input } from '@angular/core';
import { Escritor } from 'src/app/model/escritor.model';
import { Router } from '@angular/router'; //el router no solo hay que importarlos sino tambien hay que intectaryo

@Component({
  selector: 'app-detalleescritores',
  templateUrl: './detalleescritores.component.html',
  styleUrls: ['./detalleescritores.component.css']
})
export class DetalleescritoresComponent implements OnInit {

  @Input() detalleEscritor: Escritor;
  constructor(private router: Router) {  //de esta forma se inyecta 
    
    
  }

  ngOnInit() {
  console.log(this.detalleEscritor);
  }

  irADetalle(identificador){
      this.router.navigate(['/escritor',identificador]);
  }
  
}
