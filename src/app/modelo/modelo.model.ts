import { Marca } from './../marcas/marca.model';
export interface Modelo {

  modelo?:string;
  id?: number;
  codigo?:number;
  nome?:string;
  //marca?:number;
  fipe_name?: string;
  fipe_marca?: string;
  key?: string;
  codigomarca?: number;
  marca?: Marca;
}
