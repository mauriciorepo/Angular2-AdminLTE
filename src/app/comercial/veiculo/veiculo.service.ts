import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { XVICTUM_SERVER } from '../../app.api';

import { Veiculo } from './veiculo.model';


import { Cliente } from './../clientes/cliente.model';

import { VeiculoServer } from './veiculo-server.model';

@Injectable()
export class VeiculoService {

  constructor(private http: HttpClient) { }


cadastroVeiculo(cliente: Cliente): Observable<Cliente> {

  return this.http.post<Cliente>(`${XVICTUM_SERVER}/veiculos/criar` , cliente);


}

findVeiculos(): Observable<VeiculoServer[]> {

  return  this.http.get<VeiculoServer[]>(`${XVICTUM_SERVER}/veiculos`);
}

finfVeiculoByCliente(id: number): Observable<VeiculoServer[]> {

  return null;
}

findVeiculoById(id: number): Observable <VeiculoServer> {
  return this.http.get<VeiculoServer>(`${XVICTUM_SERVER}/veiculos/${id}`);
}


editarVeiculo(  veiculo: VeiculoServer, clienteid: number): Observable<VeiculoServer> {

  console.log(veiculo);
  return this.http.put<VeiculoServer>(`${XVICTUM_SERVER}/veiculos/${veiculo.id}` , veiculo);
}

}
