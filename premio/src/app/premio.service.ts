import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: Http) { }


getPremio(){
  let headers = new Headers();
  headers.append('user-token','h.zDtafBUH¡g1uswcQwD');
  let opts = new RequestOptions();
  opts.headers = headers;
  return this.http.get('http://registrate.ngrok.io/premio',opts).toPromise();
  //esto recoge los datos de la pagina indicada y ahora los tenemos que recuperar
}
//esto es un metodo generico, le decimos al service que va a recibir de algun sitio un objeto
registroUsuario(values){ //le decimos que va a recibir un objeto con los ss paramentros
  return this.http.post('http://registrate.ngrok.io/register',values).toPromise();
}

loginUsuario(values){
  return this.http.post('http://registrate.ngrok.io/login',values).toPromise();
}

}


