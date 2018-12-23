import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PremioService } from '../premio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private premioService: PremioService) {
    this.formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    this.premioService.loginUsuario(this.formLogin.value).then((response)=>{
      console.log(response.json());
    })
  }


}
