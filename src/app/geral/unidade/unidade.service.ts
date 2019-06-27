import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidade } from './unidade.model';
import { Observable } from 'rxjs';
import { XVICTUM_SERVER } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }


getUnidade():Observable<Unidade[]>{
  return this.http.get<Unidade[]>(`${XVICTUM_SERVER}/unidades`);

}

launchUnits(un: Unidade):Observable<Unidade>{

  return this.http.post<Unidade>(`${XVICTUM_SERVER}/unidades`,un);
}


editUnits(un: Unidade):Observable<Unidade>{
  return this.http.put<Unidade>(`${XVICTUM_SERVER}/unidades/${un.id}`, un);
}

getById(id:number):Observable<Unidade>{
return this.http.get(`${XVICTUM_SERVER}/unidades/${id}`);
}

}
