import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fabricante } from './fabricante.model';
import { Observable } from 'rxjs';
import { XVICTUM_SERVER } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  constructor(private http: HttpClient) {

   }

   lancaFabricante(fab: Fabricante):Observable<Fabricante>{

    return this.http.post<Fabricante>(`${XVICTUM_SERVER}/fabricantes`, fab);
   }

   getFabricante():Observable<Fabricante[]>{


    return this.http.get<Fabricante[]>(`${XVICTUM_SERVER}/fabricantes`);

   }

   editarFabricante(fab: Fabricante):Observable<any>{

    return this.http.put<Fabricante>(`${XVICTUM_SERVER}/fabricantes/${fab.id}`, fab);
   }

   getFabricanteById(id: number):Observable<Fabricante>{
     return this.http.get<Fabricante>(`${XVICTUM_SERVER}/fabricantes/${id}`)
   }
}
