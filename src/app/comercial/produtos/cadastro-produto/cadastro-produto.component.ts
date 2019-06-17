import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, FormControl } from '@angular/forms';
import { Produto } from '../produto.model';
import { Mask } from './../../../mask';
import { ProdutosComponent } from '../produtos.component';

import { VOLUME, MOEDA, PERCENT } from './../../../pattern.api';
import { ProdutoService } from '../produto.service';
import { GrupoService } from '../../grupos/grupo.service';
import { Grupo } from '../../grupos/grupo.model';
import { FabricanteService } from '../../fabricante/fabricante.service';
import { Fabricante } from '../../fabricante/fabricante.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
   produto: Produto;
   produtoForm: FormGroup;
  public mask=new Mask();
  today= Date.now();
  grupolist: Grupo[];
  subgrupolist: Grupo[];
  fabricantelist: Fabricante[];
  grupo: Grupo;
   constructor(
     private fb: FormBuilder,
     private produtoService: ProdutoService,
     private grupoService: GrupoService,
     private fabricanteService: FabricanteService
    ) { }

  ngOnInit() {
    this.createFormProduto();
    this.findOrigem();
    this.findFabricante();
  }


createFormProduto(){
  this.produtoForm= this.fb.group({

    ativo: new FormControl(true),
    descricao: ['',[Validators.maxLength(255),Validators.minLength(3),Validators.required]],
    
    ean: ['',Validators.maxLength(255)],
    fabricante: ['',Validators.required],
    codbarras:['',Validators.maxLength(255)],
    data_fabricacao: ['', Validators.maxLength(10)], 
    data_inclusao: ['',Validators.maxLength(10)],
    validade:  ['',Validators.maxLength(10)],
    observacao:['',Validators.maxLength(255)] ,
    preco_fornecedor: ['',[Validators.maxLength(10),Validators.pattern(MOEDA)]],
    preco_promocional:['',Validators.maxLength(10)],
    preco_base:['',Validators.maxLength(10)],
    margem_preco_promocional:['',[Validators.maxLength(10),Validators.pattern(PERCENT)]],
    margem_preco_base:['',[Validators.maxLength(10),Validators.pattern(PERCENT)]],
    preco_varejo: ['',Validators.maxLength(10)],
    estoque_maximo: ['',Validators.maxLength(10)],
    estoque_minimo: ['',Validators.maxLength(10)],
    serie: new FormControl(false),
    lote: new FormControl(false),
    icms: ['', Validators.maxLength(10)], 
    sticms: ['', Validators.maxLength(10)], 
    icmsst:  ['', Validators.maxLength(10)],
    aliqipi: ['', Validators.maxLength(10)], 
    alipis: ['', Validators.maxLength(10)],
    aliconfins: ['', Validators.maxLength(10)],
    data_alteracao:['',Validators.maxLength(10)],
    peso_bruto: ['',Validators.maxLength(5)],
    volume: ['',[Validators.max(5),Validators.pattern(VOLUME)]],
    grupo: [''],
    origem: ['',Validators.required]

    
    // lote_compra: ['', Validators.maxLength(10)],
    
    
    //data_atualizacao_custo: ['', Validators.maxLength(10)], 
    

  });

}


cadastroProduto(){
if(this.produtoForm.valid){

  console.log(this.produtoForm.value)

  this.produto=this.produtoForm.value;
  this.produto.data_fabricacao=this.produto.data_fabricacao.replace(this.mask.unmask,''); 
  this.produto.data_inclusao=this.produto.data_inclusao.replace(this.mask.unmask,'');
  this.produto.data_alteracao=this.produto.data_alteracao.replace(this.mask.unmask,'');
   
   
   this.produto.data_atualizacao_custo=this.produto.data_atualizacao_custo.replace(this.mask.unmask,'');
   this.produto.validade=this.produto.validade.replace(this.mask.unmask,'');
   console.log(this.produto);

   this.produtoService.lancaProduto(this.produto).subscribe(resp=>console.log("foi"))
}

}
findOrigem() {

  
  this.grupoService.findGrupoByNivel(1).subscribe(grupos => {
  this.grupolist = grupos;
  
  }  );
}

findGrupoByOrigem(){
    //this.grupo=this.produtoForm.value
    
     this.grupoService.findGrupoByOrigem(parseInt(this.produtoForm.get('grupo').value, 10)).subscribe(list=>{
       this.subgrupolist=list;
      
      });
  }
  findFabricante(){

    this.fabricanteService.getFabricante().subscribe(list=>{
      this.fabricantelist=list;
    });
  }

}
