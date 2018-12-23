import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alumnosnode';

alumnos: any[];
formNewAlumno: FormGroup;
constructor(private apiService:ApiService){
  this.formNewAlumno = new FormGroup({
    nombre: new FormControl(''),
    matricula: new FormControl(''),
    email: new FormControl(''),
    nota_media: new FormControl(''),
    edad: new FormControl(''),
    id_escuelas: new FormControl(''),
    fk_cursos: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    sexo: new FormControl('')

  });
}
  ngOnInit(){
    this.apiService.getAlumnos().then((res)=>{
      this.alumnos=res.json();
    });
  }

  handleClick(idAlumno){
    this.apiService.getAlumnosById(idAlumno).then((res)=>{
      console.log(res.json());
    });
  }

  onSubmit(){
    
    this.apiService.newAlumno(this.formNewAlumno.value).then((res)=>{
      const response = res.json();
      if(response.error){
        alert(response.error);
      }else{
        this.apiService.getAlumnos().then(res=> this.alumnos = res.json());
      }
    });
  }

}


