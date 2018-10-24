import { Modelo } from "../modelo/modelo.model";

export interface Marca {

  name?: string;
  fipe_name?:string;
  order?: number;
  key?: string;
  id?: number;
  img?: string;
  codigo?:number;
  nome?:string;
  modelo?: Modelo[];
  version?:number;


}
