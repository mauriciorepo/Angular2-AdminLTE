import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { XVICTUM_SERVER } from './../../app.api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json,text/plain',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',

    })
  };

lancaProduto(prod: Produto):Observable<Produto>{

  return this.http.post<Produto>(`${XVICTUM_SERVER}/produtos`, prod );

}
getProdutos():Observable<Produto[]>{
   return this.http.get<Produto[]>(`${XVICTUM_SERVER}/produtos`);
}

getProdutosByFornecedor(){}

removeProdutos(){}

editProduto(id:number, Prod:Produto):Observable<Produto>{
  return this.http.put<Produto>(`${XVICTUM_SERVER}/produtos${id}`, Prod);
}

getProdutoById(id:number):Observable<Produto>{
  return this.http.get<Produto>(`${XVICTUM_SERVER}/produtos/${id}`);
}

}
