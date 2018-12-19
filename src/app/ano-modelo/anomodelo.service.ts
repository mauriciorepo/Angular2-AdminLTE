import { XVICTUM_SERVER } from './../app.api';
import { AnoModeloServer } from './ano-modelo-server.model';
import { ModeloServer } from './../modelo/modeloserver.model';
import { AnoModelo } from './ano-modelo.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { XVICTUM_MARSHAPE } from '../app.api';
import { Modelo } from '../modelo/modelo.model';

@Injectable()
export class AnomodeloService {
   modeloserver: Modelo;
   anomodeloserver: AnoModeloServer;
   anomodelolist: AnoModelo[];
  constructor(private http: HttpClient) { }

   getAnoModelo(codigoMarca: number, modelo: ModeloServer): Observable<AnoModelo[]> {
   // console.log(`${XVICTUM_MARSHAPE}/Modelos?idMarca=${modelo.marca_id}&idVeiculo=${modelo.codigo}`)
    return this.http.get<AnoModelo[]>(`${XVICTUM_MARSHAPE}/Modelos?idMarca=${codigoMarca}&idVeiculo=${modelo.codigo}`);
  }

 cadastroAnoModelo(modeloid: number , ano_modelo: AnoModelo): Observable<any> {
  this.anomodeloserver = null;
  //this.anomodeloserver = {codigo: '' + ano_modelo.id, anomodelo: ano_modelo.name, modelo_id: modeloid };
 //var model={codigo:modelo.id, modelo:modelo.fipe_name, marca:marca }
  //this.modeloserver.anomodelo.push(modelo);

  //console.log(this.marca)
  var body = {codigo: ano_modelo.id, anomodelo: ano_modelo.name, modelo_id: modeloid };

  //this.anomodeloserver=body;
 // return this.http.post<Marca>(`${XVICTUM_SERVER}/marcas`,  this.marcaserver , this.httpOptions)
  return this.http.post<any>(`${XVICTUM_SERVER}/anomodelos`,  this.anomodeloserver );
 }
 getAnoModeloByModelo(modelo_id): Observable<AnoModeloServer[]> {
   return this.http.get<AnoModeloServer[]>(`${XVICTUM_SERVER}/anomodelos/modelo/${modelo_id}`);
 }

}
