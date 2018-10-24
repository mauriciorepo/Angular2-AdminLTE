import { ModeloServer } from './../../modelo/modeloserver.model';
import { Marca } from './../../marcas/marca.model';
import { AnoModeloServer } from '../../ano-modelo/ano-modelo-server.model';
export interface Veiculo {

id: number ;
clienteid?: number;
modelo_id?: number;
marca_id?: number;
anomodelo_id?: number;
cor?: string;
chassi?: string;
ativo?: boolean;
placa?: string;
renavam?: string;
nummotor?: string;
combustivel?: string;
km?: number;
volume?: number;
pesomax?: number;
altura?: number;
comprimento?: number;
categoria?: string;
potencia?: string;
portas?: number;
marca: Marca;
modelo: ModeloServer;
anomodelo: AnoModeloServer;
version?: number;

}
