import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalheproduto',
  templateUrl: './detalheproduto.component.html',
  styleUrls: ['./detalheproduto.component.css']
})
export class DetalheprodutoComponent implements OnInit {
@Input() produto:Produto;
sub:any;
id:number;
today=Date.now();
@Input()active:boolean;
  constructor(
    private produtoService:ProdutoService,
    private route: ActivatedRoute,
    private router:Router,
    private dataPipe: DatePipe
    ) { }

  ngOnInit() {
    //this.today=this.dataPipe.transform(this.today, 'dd-MM-yyyy');
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      this.produtoService.getProdutoById(this.id).subscribe(prod=>{
        this.active=prod.ativo;
        this.produto=prod;
      })
    });
  }


  updateProduto(){

  }
  addFornecedor(){

  }
  veiculoNavigate() {
    this.router.navigate(['starter', 'editproduto', this.produto.id]);

  }
}
