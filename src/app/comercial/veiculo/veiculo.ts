import { AnoModeloServer } from './../../ano-modelo/ano-modelo-server.model';
import { MarcaServer } from '../../marcas/marcaserver.model';
import { ModeloServer } from '../../modelo/modeloserver.model';

export class Veiculo {
  private _id: number;
  private  _cliente_id?: number;
  private modelo_id?: number;
  private marca_id?: number;
  private anomodelo_id?: number;
  private cor?: string;
  private chassi?: string;
  private ativo?: boolean;
  private placa?: string;
  private renavam?: string;
  private nummotor?: string;
  private combustivel?: string;
  private km?: number;
  private volume?: number;
  private pesomax?: number;
  private altura?: number;
  private comprimento?: number;
  private categoria?: string;
  private potencia?: string;
  private portas?: number;
  private marca: MarcaServer;
  private modelo: ModeloServer;
  private anomodelo: AnoModeloServer;
  private version: number;


public get id(): number {
  return this._id;
}

public set id(p: number){
  this._id = p;
}

public get cliente_id(): number {
  return this._cliente_id;
}

public set cliente_id(p: number){
  this._cliente_id = p;
}


}
