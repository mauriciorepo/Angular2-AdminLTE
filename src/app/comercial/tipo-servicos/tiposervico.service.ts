import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tiposervico } from './tiposervico.model.';
import { Observable } from 'rxjs';
import { XVICTUM_SERVER } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class TiposervicoService {

  constructor(private http: HttpClient) { }


findTipoServico():Observable<Tiposervico[]>{
  return this.http.get<Tiposervico[]>(`${XVICTUM_SERVER}/tipo_servicos`)
}

lancaTipoServico(tipo: Tiposervico):Observable<Tiposervico>{

  return this.http.post<Tiposervico>(`${XVICTUM_SERVER}/tipo_servicos`, tipo);
}

editarTipoServico(tipo:Tiposervico):Observable<Tiposervico>{
  return this.http.put<Tiposervico>(`${XVICTUM_SERVER}/tipo_servicos/${tipo.id}`,tipo)
}

findById(id:number):Observable<any>{
  return this.http.get<Tiposervico>(`${XVICTUM_SERVER}/tipo_servicos/${id}`)
}
}
