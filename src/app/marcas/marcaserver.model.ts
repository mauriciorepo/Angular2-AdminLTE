import { ModeloServer } from './../modelo/modeloserver.model';

export interface MarcaServer {

  id?: number;
  codigo?: number;
  nome?: string;
  version?: number;
  modelo?: ModeloServer[];
}
