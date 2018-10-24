import { FornecedorService } from './../fornecedor.service';
import { Fornecedor } from './../cadastrofornecedor/fornecedor.model';

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-fornecedorboxlist',
  templateUrl: './fornecedorboxlist.component.html'
})
export class FornecedorboxlistComponent implements OnInit {

   fornecedor:  Fornecedor;
 @Input() list:Fornecedor[];
  constructor( private fornecedorService: FornecedorService) { }

  ngOnInit() {
     this.fornecedorService.getFornecedores().subscribe((forn:Fornecedor[]) => this.list = forn);
  }

}
