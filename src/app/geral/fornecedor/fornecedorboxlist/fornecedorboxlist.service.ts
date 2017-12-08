import { Observable } from 'rxjs/Rx';

import { Fornecedor } from './../fornecedor.model';

import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { XVICTUM_API } from './../../../app.api';
import 'rxjs/add/operator/map';

//Servico declarado no modulo fica disponivel para todo sistema
//decorator injectable é utilizado para injetar sericos em components ou outros servicos
@Injectable()
export class FornecedorboxlistService {
//
  constructor(private http: Http ) { }

   fornecedor(): Observable<Fornecedor[]> {

    return this.http.get(`${XVICTUM_API}/fornecedor`).map(response => response.json());
   }

list() {
  //return this.http.get(`${XVICTUM_API}/fornecedor`)
}
}
