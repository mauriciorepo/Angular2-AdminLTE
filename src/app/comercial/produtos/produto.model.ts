import { Fabricante } from "../fabricante/fabricante.model";
import { Grupo } from "../grupos/grupo.model";

export interface Produto{

    id?:number;
    descricao?: string,
    codbarras?: string,
    ean?: string;
    fabricante?: Fabricante;
    preco_fornecedor?: number;
    preco_base?:number;
    margem_preco_base?: number;
    preco_promocional?: number;
    margem_preco_promocional?: number;
    preco_varejo?: number;
    data_inclusao?:string;
    data_alteracao?: string;
    ativo?: boolean;
    peso_bruto?: number;
    volume?: number;
    lote?: string;
    serie?: string;
    estoque_maximo?: number;
    estoque_minimo?: number;
    lote_compra?: number;
    validade?: string;
    data_fabricacao?: string;
    icms?: number;
    sticms?: number;
    icmsst?: number;
    aliqipi?: number;
    aliqpis?: number;
    aliqconfins?: number;
    data_atualizacao_custo?: string;
    observacao?: string;
    grupo?:Grupo;
    sub_grupo?:Grupo;
    
}