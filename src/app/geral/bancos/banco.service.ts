import { ErrorHandler } from './../../app.error-handler';

import { XVICTUM_API } from './../../app.api';
import { Observable } from 'rxjs/Rx';
import { Banco } from './banco.model';
import {  HttpClient , HttpParams ,  HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';


@Injectable()
export class BancoService {
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  constructor(private http: HttpClient) { }

  listBanco(): Observable<Banco[]> {

    return this.http.get<Banco[]>(`${XVICTUM_API}/bancos`);

  }




  get(num?: string): Observable<Banco> {
    let params: HttpParams;
    num = num.trim();
    if (num) {
      params = new HttpParams().set('codbacen', num);
    }
    return this.http.get<Banco>(`${XVICTUM_API}/bancos` , {params: params } );
  }

  updateBanco (banco: Banco): Observable<Banco> {
    return this.http.put<Banco>(`${XVICTUM_API}/bancos`, banco, this.httpOptions);
  }
  cadastroBanco(banco: Banco): Observable<Banco>{
    console.log("Sevice:" +banco);
    var body = {codbacen:banco.codbacen,  nome: banco.nome, site: banco.site}
    console.log("Body: " +body )
    return this.http.post<Banco>(`${XVICTUM_API}/bancos` , body, this.httpOptions )

  }
}
