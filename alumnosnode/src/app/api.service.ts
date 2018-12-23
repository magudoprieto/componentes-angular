import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseUrl:string = 'http://localhost:3000/api';

  constructor(private http:Http) {

   }

  getAlumnos(){
    return this.http.get(`${this.baseUrl}/alumnos`).toPromise()
  }

  getAlumnosById(idAlumno){
    return this.http.get(`${this.baseUrl}/alumnos/${idAlumno}`).toPromise()
  }

  newAlumno(values){
    return this.http.post(`${this.baseUrl}/alumnos`,values).toPromise()
  }
}
