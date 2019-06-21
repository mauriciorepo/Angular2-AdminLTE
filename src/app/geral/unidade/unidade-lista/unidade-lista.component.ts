import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../unidade.service';
import { Unidade } from '../unidade.model';

@Component({
  selector: 'app-unidade-lista',
  templateUrl: './unidade-lista.component.html',
  styleUrls: ['./unidade-lista.component.css']
})
export class UnidadeListaComponent implements OnInit {

  list: Unidade[];
  constructor(private unidadeService: UnidadeService) {

   }

  ngOnInit() {
      this.unidadeService.getUnidade().subscribe(lista=>{
        this.list=lista;
      })
  }

}
