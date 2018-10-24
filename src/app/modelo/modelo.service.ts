import { ModeloServer } from './modeloserver.model';
import { MarcaServer } from './../marcas/marcaserver.model';
import { Marca } from './../marcas/marca.model';
import { XVICTUM_WS, XVICTUM_SERVER, XVICTUM_MARSHAPE } from './../app.api';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from './modelo.model';


@Injectable()
export class ModeloService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Data-Type': 'json' });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'/*,
      'Authorization': 'my-auth-token'*/
    })
  };
  marca: Marca;
  model: Modelo;
  marcaserver: MarcaServer;
  modeloserver: ModeloServer;
  constructor(private http: HttpClient) { }
//Here are the keys related to the current environment. Should a sensitive key be leaked or accidentally exposed you can regenerate them at will, if you need to block them immediately you are also able to do this.
getmodeloServer(): Observable<Modelo[]> {
  // console.log(`${XVICTUM_WS}/carros/marcas/${id}/modelos`);
   return this.http.get<Modelo[]>(`${XVICTUM_SERVER}/modelos`);
 }
getmodelo(id: number): Observable<Modelo[]> {
   // console.log(`${XVICTUM_WS}/carros/marcas/${id}/modelos`);
    return this.http.get<Modelo[]>(`${XVICTUM_WS}/carros/marcas/${id}/modelos`);
  }
  cadastroModelo(modelo: Modelo): Observable<Modelo> {
    this.marca.modelo[0] = modelo;
    var body = {codigo: modelo.codigo, modelo: modelo.nome, marca: modelo.codigomarca };
    return this.http.post<Modelo>(`${XVICTUM_SERVER}/modelos`, body , this.httpOptions);

  }
  cadastroModeloByMarca(modelo: ModeloServer): Observable<ModeloServer> {
     this.marcaserver = null;
    this.marcaserver = { id: modelo.marca.id, codigo: null, nome: '', modelo: [] };
   //var model={codigo:modelo.id, modelo:modelo.fipe_name, marca:marca }
    this.marcaserver.modelo.push(modelo);

    //console.log(this.marca)
    //var body={codigo:modelo.codigo,modelo:modelo.nome, marca:modelo.marca }


   // return this.http.post<Marca>(`${XVICTUM_SERVER}/marcas`,  this.marcaserver , this.httpOptions)
    return this.http.post<ModeloServer>(`${XVICTUM_SERVER}/modelos`,  modelo , this.httpOptions);

  }

  getmarca(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas`);

  }

  getModeloMarshape(id: number): Observable<Modelo[]> {
   //console.log(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`)
    return this.http.get<Modelo[]>(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`);
  }
  getModeloByMarca(marca_id: number): Observable<Modelo[]> {
    //console.log(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`)
     return this.http.get<Modelo[]>(`${XVICTUM_SERVER}/modelos/marca/${marca_id}`);
   }

}
