import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) {
    this.activatedRoute.parent.params.subscribe((params)=>{
        console.log(params);
        let idEscritor = parseInt(params.idEscritor)
        console.log(this.librosService.getLibrosByEscritor(idEscritor));
    });
   }

  ngOnInit() {
  }

}
