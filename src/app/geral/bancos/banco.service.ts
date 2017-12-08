
import { XVICTUM_API } from './../../app.api';
import { Observable } from 'rxjs/Rx';
import { Banco } from './banco.model';
import { Headers, Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BancoService {

  constructor(private http: Http) { }

  listBanco(): Observable<Banco[]> {

    return this.http.get(`${XVICTUM_API}/bancos`).map(response => response.json());
   // return this.http.get(`${XVICTUM_API}/bancos`).map(response => response.json());
    //return this.http.get(`${XVICTUM_API}/bancos`).map(Response => Response.json())
  }

  save(banco: Banco): Observable<Response> {
    return this.http.put(`${XVICTUM_API}/bancos` , JSON.stringify(banco));
  }

  get(id: number): Observable<Banco> {
    return this.http.get(`${XVICTUM_API}/bancos/${id}` , {headers: this.getHeaders()}).map(mapBanco);
  }
  private getHeaders() {
   let  headers = new Headers();
    headers.append('Accept' , 'application/json');
    headers.append('Content-Type' , 'application/json');
    return headers;
  }

}

function mapBanco(response: Response): Banco {
  return toBanco(response.json);
}

function toBanco(r: any): Banco {
  return r;
}
