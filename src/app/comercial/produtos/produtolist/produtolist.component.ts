import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { GrupoComponent } from '../../grupos/grupo/grupo.component';

@Component({
  selector: 'app-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.css']
})
export class ProdutolistComponent implements OnInit {

  @Input() list:Produto[];
  constructor( private produtoService: ProdutoService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(){
     this.produtoService.getProdutos().subscribe((prod:Produto[])=>{
      console.log(prod); 
      this.list=prod;
     });
  }

}
