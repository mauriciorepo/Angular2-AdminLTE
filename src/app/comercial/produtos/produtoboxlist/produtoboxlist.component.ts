import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produtoboxlist',
  templateUrl: './produtoboxlist.component.html',
  styleUrls: ['./produtoboxlist.component.css']
})
export class ProdutoboxlistComponent implements OnInit {

@Input() list:Produto[];
  
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
      this.produtoService.getProdutos().subscribe((prod:Produto[])=>{
        console.log(prod);
        this.list=prod;
      });
  }

}
