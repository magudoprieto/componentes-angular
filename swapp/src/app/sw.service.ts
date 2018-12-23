import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private http: Http) { }

  getAllPlanets(){
    return this.http.get('https://swapi.co/api/planets');
  }

 
}

