import { XVICTUM_SERVER } from './../../app.api';
import { Observable } from 'rxjs/Rx';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class ClienteService {


  constructor(private http: HttpClient, private dataPipe: DatePipe) { }
  today = Date.now();
   //data:string;
   data = this.dataPipe.transform(this.today, 'yyyy-MM-dd');
  cadastroCliente(forn: Cliente): Observable<Cliente> {

    var body = {fantasia: forn.fantasia,
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
    return this.http.post<Cliente>(`${XVICTUM_SERVER}/clientes`, body);
  }

  getClienteById(id: number): Observable<Cliente> {

    return this.http.get<Cliente>(`${XVICTUM_SERVER}/clientes/${id}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${XVICTUM_SERVER}/clientes`);
  }
 editarCliente(id: number, forn: Cliente ): Observable<Cliente> {
  return this.http.put<Cliente>(`${XVICTUM_SERVER}/clientes/${id}` , forn);
 }

}
