import { Http } from '@angular/http';
import { Banco } from './../bancos/banco.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Fornecedor } from './cadastrofornecedor/fornecedor.model';
import { XVICTUM_SERVER } from './../../app.api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';


@Injectable()
export class FornecedorService {

  constructor(private http: HttpClient, private dataPipe: DatePipe) { }
  today= Date.now();
   //data:string;
   data = this.dataPipe.transform(this.today, 'yyyy-MM-dd');
  cadastroFornecedor(forn: Fornecedor): Observable<Fornecedor> {

    var body = {
      fantasia: forn.fantasia,
      tipo: forn.tipo,
      tipoatividade: forn.tipoatividade,
      razaosocial: forn.razaosocial,
      cnpj: forn.cnpj,
      ie: forn.ie,
      im: forn.im,
      suframa: forn.suframa,
      rg: forn.rg,
      cpf: forn.cpf,
      ativo: forn.ativo,
      cep: forn.cep,
      logradouro: forn.logradouro,
      numero: forn.numero,

      complemento: forn.complemento,
      bairro: forn.bairro,
      ibge: forn.ibge,
      telefone2: forn.telefone2,
      bloqueado: forn.bloqueado,
      optantesn: forn.optantesn,
      retpis: forn.retpis,
      retconfins: forn.retconfins,
      retirrf: forn.retirrf,
      retcsll: forn.retcsll,
      datainc2: this.data,
      telefone: forn.telefone,
      databloqueio: forn.databloqueio,
      datainativo: forn.datainativo,
      homepage: forn.homepage,
      datainc: this.data };
    return this.http.post<Fornecedor>(`${XVICTUM_SERVER}/fornecedores`, body);
  }

  getFornecedorerById(id: number): Observable<Fornecedor> {

    return this.http.get<Fornecedor>(`${XVICTUM_SERVER}/fornecedores/${id}`);
  }

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${XVICTUM_SERVER}/fornecedores`);
  }
 editarFornecedor(id: number, forn: Fornecedor ): Observable<Fornecedor> {

  return this.http.put<Fornecedor>(`${XVICTUM_SERVER}/fornecedores/${id}` , forn)
 }
}
