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
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json,text/plain',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',

    })
  };
  marca: Marca;
  model: Modelo;
  listmodelo:ModeloServer[];
  marcaserver: MarcaServer;
  modeloserver;modelo2: ModeloServer;
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
  cadastroModeloTeste():Observable<MarcaServer>{

    //console.log(this.marcaserver)
    //var body={codigo:modelo.codigo,modelo:modelo.nome, marca:modelo.marca }
    this.marcaserver=null;
    this.model=null;
this.marcaserver={ id: 1, codigo:7, nome:'' , modelo: [] }
    this.marcaserver.codigo=7;
    this.marcaserver.id=1;
    this.model={  codigo:14, modelo:"X7"} 
    this.model.codigo=14;
    //this.listmodelo.push(this.model)
    this.model.modelo="X7";
    this.marcaserver.modelo.push(this.model);
    this.modelo2=null;
    this.modelo2={  codigo:55, modelo:"X8" }
    this.marcaserver.modelo.push(this.modelo2);
     console.log(this.marcaserver.modelo);
     console.log(this.http.post<MarcaServer>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver , this.httpOptions));
    return this.http.post<MarcaServer>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver , this.httpOptions)
   
  }
  cadastroModeloByMarca(id: number, /*marca:MarcaServer ,*/modeloList: Modelo[]): Observable<ModeloServer> {
    this.marcaserver=null;
this.marcaserver={ id: id, codigo:null, nome:'' , modelo: [] }

   for (let lista=0; lista <  modeloList.length; lista++) {
    //this.Refmarca=null;
    //this.Refmarca={ id: id, codigo:null, nome:''  }
    
     // modeloList[lista].marca=this.Refmarca;
      //modeloList[lista].codigo=modeloList[lista].id
      //modeloList[lista].modelo =modeloList[lista].fipe_name
      this.modeloserver=null;
      this.modeloserver={  codigo:modeloList[lista].id, modelo:modeloList[lista].fipe_name /*, marca: this.marcaserver*/  }
      this.marcaserver.modelo.push(this.modeloserver)
      // this.modeloserver.marca=this.marcaserver;
     // this.modeloserver.codigo=modeloList[lista].id
      //this.modeloserver.modelo=modeloList[lista].fipe_name
      //console.log("ID:"+ lista.marca);
    //console.log(modeloList[lista]);
    return this.http.post<ModeloServer>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver, this.httpOptions)

}
    
    
    //this.marcaserver = null;
    //this.marcaserver = { id: modelo.marca.id, codigo: null, nome: '', modelo: [] };
   //var model={codigo:modelo.id, modelo:modelo.fipe_name, marca:marca }
    //this.marcaserver.modelo.push(modelo);

    //console.log(this.marcaserver)
    //var body={codigo:modelo.codigo,modelo:modelo.nome, marca:modelo.marca }


   // return this.http.post<ModeloServer>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver, this.httpOptions)
   // return this.http.post<ModeloServer>(`${XVICTUM_SERVER}/modelos`,  modelo , this.httpOptions);

  }
  persistirModeloTeste(idmarca: number,mod: Modelo){

    this.marcaserver = null;
    this.marcaserver = { id:idmarca, codigo: null, nome: '', modelo: [] };
    this.modeloserver=null;
      this.modeloserver={  codigo:mod.codigo, modelo:mod.fipe_name /*, marca: this.marcaserver*/  }
      this.marcaserver.modelo.push(this.modeloserver)
    return this.http.post<ModeloServer>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver, this.httpOptions)
   
  }
  cadastroModeloByRapid(modelo:Modelo):Observable<Modelo>{
    this.marcaserver = null;
    this.marcaserver = { id: modelo.marca.id, codigo: null, nome: '', modelo: [] };
   //var model={codigo:modelo.id, modelo:modelo.fipe_name, marca:marca }
    this.marcaserver.modelo.push(modelo);

    //console.log(this.marca)
    //var body={codigo:modelo.codigo,modelo:modelo.nome, marca:modelo.marca }


    return this.http.post<Modelo>(`${XVICTUM_SERVER}/modelos/criar`,  this.marcaserver , this.httpOptions)


  }

  getmarca(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${XVICTUM_SERVER}/marcas`);

  }

  getModeloMarshape(id: number): Observable<Modelo[]> {
   //console.log(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`)
    return this.http.get<Modelo[]>(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`);
  }
  getModeloRapid(id: number): Observable<Modelo[]> {
    //console.log(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`)
     return this.http.get<Modelo[]>(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`);
   }
  getModeloByMarca(marca_id: number): Observable<Modelo[]> {
    //console.log(`${XVICTUM_MARSHAPE}/Veiculos?idMarca=${id}`)
     return this.http.get<Modelo[]>(`${XVICTUM_SERVER}/modelos/marca/${marca_id}`);
   }

}
