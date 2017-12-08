import { FornecedorboxlistService } from './fornecedorboxlist.service';

import { Component, Input, OnInit } from '@angular/core';

import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedorboxlist',
  templateUrl: './fornecedorboxlist.component.html',
  styleUrls: ['./fornecedorboxlist.component.css']
})
export class FornecedorboxlistComponent implements OnInit {

  @Input() fornecedor:  Fornecedor[];

  constructor( private fornecedorboxlistService: FornecedorboxlistService) { }

  ngOnInit() {
     this.fornecedorboxlistService.fornecedor().subscribe(fornecedor => this.fornecedor = fornecedor);
  }

}
