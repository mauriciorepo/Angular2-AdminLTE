import { Component, OnInit } from '@angular/core';
import { TipoSistemaService } from '../tipo-sistema.service';
import { TipoSistema } from '../tipo-sistema.model';

@Component({
  selector: 'app-tiposistemaboxlist',
  templateUrl: './tiposistemaboxlist.component.html',
  styleUrls: ['./tiposistemaboxlist.component.css']
})
export class TiposistemaboxlistComponent implements OnInit {
listSistema: TipoSistema[];
  constructor(
    private tipoSistemaService: TipoSistemaService
    ) {

   }

  ngOnInit() {
    this.tipoSistemaService.getTipoSistema().subscribe(lista=>{
          this.listSistema=lista;
    })
  }

}
