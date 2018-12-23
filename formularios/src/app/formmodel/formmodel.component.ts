import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formmodel',
  templateUrl: './formmodel.component.html',
  styleUrls: ['./formmodel.component.css']
})
export class FormmodelComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl('Nombre por defecto',[Validators.required]),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      edad: new FormControl('',[Validators.required,this.edadValidator,Validators.pattern(/^[0-9]*$/)])
    });
    let controlNombre = this.form.controls.nombre;
    controlNombre.valueChanges.pipe(debounceTime(500)).subscribe((value)=> {
      console.log(value);
    });

   }


   edadValidator(control){
      let edadMax = 65;
      let edadMin = 18;
      let edadNum = parseInt(control.value); //se parsea el valor que se introduzca en el campo
      if(edadNum < edadMin || edadNum > edadMax){
        return {
          edad: {
          edadMaxima: edadMax,
          edadMinima: edadMin
          }
        }
      } else {
        return null;
      }
   }


  ngOnInit() {
    
  }

  envioFormulario(value){
   console.log(this.form.value);
   console.log(this.form.valid);
  }

}
