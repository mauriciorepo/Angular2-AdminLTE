import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoSistema } from './tipo-sistema.model';
import { XVICTUM_SERVER } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class TipoSistemaService {

  constructor(
    private http: HttpClient
    
    ) { }

    getTipoSistema():Observable<TipoSistema[]>{

      return this.http.get<TipoSistema[]>(`${XVICTUM_SERVER}/tipo_sistemas`);
    
    }

    findById(id:number):Observable<TipoSistema>{

      return this.http.get<TipoSistema>(`${XVICTUM_SERVER}/tipo_sistemas/${id}`);
    
    }
    lancaTipoSistema(tipo: TipoSistema):Observable<TipoSistema>{

      return this.http.post<TipoSistema>(`${XVICTUM_SERVER}/tipo_sistemas`,tipo);
    
    }

    editarTipoSistema(tipo: TipoSistema):Observable<TipoSistema>{

      return this.http.put<TipoSistema>(`${XVICTUM_SERVER}/tipo_sistemas/${tipo.id}`,tipo);
    }
  }
