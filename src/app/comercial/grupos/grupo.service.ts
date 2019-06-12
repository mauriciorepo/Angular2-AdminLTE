import { Injectable } from '@angular/core';

  import { Observable } from 'rxjs';
  import { XVICTUM_SERVER } from './../../app.api';
  import { Grupo } from './grupo.model';

  import { HttpClient, HttpHeaders } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class GrupoService {

    constructor( private http: HttpClient) { }


    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json,text/plain',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
  
      })
    };

  lancarGrupo(grupo):Observable<Grupo>{


    return this.http.post<Grupo>(`${XVICTUM_SERVER}/grupos`,grupo );

  }

  getGrupo():Observable<Grupo[]>{

    return this.http.get<Grupo[]>(`${XVICTUM_SERVER}/grupos`);
  }
findGrupoByNivel(nivel: number):Observable<Grupo[]>{

  return this.http.get<Grupo[]>(`${XVICTUM_SERVER}/grupos/nivel/${nivel}` );
}
findGrupoByOrigem(id: number):Observable<Grupo[]>{
  return this.http.get<Grupo[]>(`${XVICTUM_SERVER}/grupos/origem/${id}`);
}

findById(id: number):Observable<Grupo>{
  return this.http.get<Grupo>(`${XVICTUM_SERVER}/grupos/${id}`)
}

editarGrupo(grupo: Grupo):Observable<any>{

   return this.http.put<Grupo>(`${XVICTUM_SERVER}/grupos/${grupo.id}`, grupo)
}

  }
