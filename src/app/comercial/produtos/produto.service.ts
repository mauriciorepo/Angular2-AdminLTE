import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { XVICTUM_SERVER } from './../../app.api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }



lancaProduto(prod: Produto):Observable<Produto>{

  return this.http.post<Produto>(`${XVICTUM_SERVER}/produtos`, prod );

}

}
