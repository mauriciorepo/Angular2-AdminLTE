export interface Produto{


    descricao?: string,
    codbarras?: string,
    ean?: string;
    fabricante?: string;
    preco_fornecedor?: number;
    preco_base?:number;
    margem_preco_base?: number;
    preco_promocional?: number;
    margem_preco_promocional?: number;
    preco_varejo?: number;
    data_inclusao?:string;
    data_alteracao?: string;
    ativo?: string;
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
    alipis?: number;
    aliconfins?: number;
    data_atualizacao_custo?: string;
    observacao?: string;
    
}