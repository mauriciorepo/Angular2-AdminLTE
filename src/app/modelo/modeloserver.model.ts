import { MarcaServer } from './../marcas/marcaserver.model';
import { AnoModeloServer } from '../ano-modelo/ano-modelo-server.model';
export interface ModeloServer {

  modelo?: string;
  id?: number;
  codigo?: number;
  marca?: MarcaServer;
  marca_id?: number;
  anoModelo?: AnoModeloServer[];
}
