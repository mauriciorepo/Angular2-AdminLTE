import { XVICTUM_API, XVICTUM_WS, XVICTUM_SERVER, XVICTUM_MARSHAPE } from './../app.api';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from './marca.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MarcaService {
marca: Marca;

  constructor(private http: HttpClient ) { }
   /*let headersMarshape = new HttpHeaders().set('Content-Type', 'application/json');

  headersMarshape.set('authorization', 'X-Mashape-Key ' + 'xu0DPDWjAImsh2XFGjhgyjQmMbyCp1mlpfCjsn6ztGk2FhmllU');
*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'/*,
      'Accept': 'text/plain',
      'X-Mashape-Key': 'xu0DPDWjAImsh2XFGjhgyjQmMbyCp1mlpfCjsn6ztGk2FhmllU'*/
    })
  };
  httpOptionsMarshape = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'text/plain'
    })
  };
  cadastroMarca(ObjMarca: Marca): Observable<Marca> {
    var body= {nome: ObjMarca.name , codigo:  ObjMarca.id};
   return this.http.post<Marca>(`${XVICTUM_SERVER}/marcas` , body, this.httpOptions);
  }

  get(): Observable<Marca[]> {

    return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas` , this.httpOptions);
  }
getMarcaEdit(id: number): Observable<Marca> {
  return this.http.get<Marca>(`${XVICTUM_SERVER}/marcas/${id}`,  this.httpOptions);
}
marcaUpdate(marca: Marca): Observable<Marca> {
  var body = {id: marca.id, nome: marca.nome, codigo:  marca.codigo , version: marca.version};
  return this.http.put<Marca>(`${XVICTUM_SERVER}/marcas/${marca.id}`, body);
}
getmarca(): Observable<Marca[]> {
  return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas`);

}
getMarcaMarshape() {
  return this.http.get<Marca[]>(`${XVICTUM_MARSHAPE}/marcas` );
}
getMarcaById(id: number): Observable<Marca> {

  return this.http.get<Marca>(`${XVICTUM_SERVER}/marcas/${id}`);
}
getMarcaByLike(val: string): Observable<Marca[]> {

  return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas/like/${val}`);
}

}
