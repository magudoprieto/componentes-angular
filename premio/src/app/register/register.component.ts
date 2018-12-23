import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PremioService } from '../premio.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

formulario: FormGroup;
  constructor(private premioService: PremioService) {
    this.formulario = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      mail: new FormControl(''),
      username: new FormControl('',
      [Validators.required]),
      password: new FormControl('',
      [Validators.required]),
      address: new FormControl(''),
      age: new FormControl('')
    })
   }

  
  

  ngOnInit() {
  }

  enviarFormulario(){
    //aqui determinaremos que pasará cuando haga submit el formulario
    this.premioService.registroUsuario(this.formulario.value).then (response=>{
     console.log(response.json());
    })
  }
}
