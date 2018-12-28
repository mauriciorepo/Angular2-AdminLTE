import { XVICTUM_API, XVICTUM_WS, XVICTUM_SERVER, XVICTUM_MARSHAPE, XVICTUM_FIPE } from './../app.api';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from './marca.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MarcaService {
marca: Marca;

  constructor(private http: HttpClient ) { }
   /*const headersMarshape = new HttpHeaders().set('Content-Type', 'application/json','authorization', 'X-Mashape-Key ' + 'inCNAdEwxBmshvRBC0srBkG7FE9Vp1n7ihojsnMHaWStTlwnrq');

   headersMarshape.set('authorization', 'X-Mashape-Key ' + 'inCNAdEwxBmshvRBC0srBkG7FE9Vp1n7ihojsnMHaWStTlwnrq'); */

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'text/plain',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',

    })
  };
  httpOptionsMarshape = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'X-Mashape-Key': 'ygk9TfQTYkmshWGYDOmnaP8juGAmp18jrwMjsnLnxKnJIY3mJQ'
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
  return this.http.get<Marca[]>(`${XVICTUM_MARSHAPE}/Marcas` , this.httpOptions);
}
getMarcaById(id: number): Observable<Marca> {

  return this.http.get<Marca>(`${XVICTUM_SERVER}/marcas/${id}`);
}
getMarcaByLike(val: string): Observable<Marca[]> {

  return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas/like/${val}`);
}
getMarcaFipe(): Observable<Marca[]> {

  return this.http.get<Marca[]>(`${XVICTUM_FIPE}/carros/marcas.json` , this.httpOptions);
}

}
