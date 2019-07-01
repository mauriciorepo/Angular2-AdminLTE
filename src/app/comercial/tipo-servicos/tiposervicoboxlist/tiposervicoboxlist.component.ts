import { Component, OnInit } from '@angular/core';
import { TiposervicoService } from '../tiposervico.service';
import { Tiposervico } from '../tiposervico.model.';

@Component({
  selector: 'app-tiposervicoboxlist',
  templateUrl: './tiposervicoboxlist.component.html',
  styleUrls: ['./tiposervicoboxlist.component.css']
})
export class TiposervicoboxlistComponent implements OnInit {
list: Tiposervico[];
  constructor(
    private tipoServico: TiposervicoService
  ) { }

  ngOnInit() {
     this.tipoServico.findTipoServico().subscribe(lista=>{
        this.list=lista;
     });
  }

}
