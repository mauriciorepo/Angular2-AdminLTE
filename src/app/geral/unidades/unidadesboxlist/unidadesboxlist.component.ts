import { Component, OnInit } from '@angular/core';
import { Unidades } from '../unidade.model';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-unidadesboxlist',
  templateUrl: './unidadesboxlist.component.html',
  styleUrls: ['./unidadesboxlist.component.css']
})
export class UnidadesboxlistComponent implements OnInit {
list: Unidades[];
  constructor(private unidadeService: UnidadeService) {

   }

  ngOnInit() {
      this.unidadeService.getUnidade().subscribe(lista=>{
        this.list=lista;
      })
  }

}
