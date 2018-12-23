import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-personas',
  templateUrl: './detalle-personas.component.html',
  styleUrls: ['./detalle-personas.component.css']
})
export class DetallePersonasComponent implements OnInit {
	@Input() persona:any;
  constructor() { }

  ngOnInit() {
  }

}
