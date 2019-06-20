import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidades } from './unidade.model';
import {  XVICTUM_SERVER } from './../../app.api'


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }


getUnidade():Observable<Unidades[]>{
  return this.http.get<Unidades[]>(`${XVICTUM_SERVER}/unidades`);

}

launchUnits(un: Unidades):Observable<Unidades>{

  return this.http.post<Unidades>(`${XVICTUM_SERVER}/unidades`,un);
}


editUnits(un: Unidades):Observable<Unidades>{
  return this.http.put<Unidades>(`${XVICTUM_SERVER}/unidades/${un.id}`, un);
}

}
