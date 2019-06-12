import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo.model';

@Component({
  selector: 'app-grupoboxlist',
  templateUrl: './grupoboxlist.component.html',
  styleUrls: ['./grupoboxlist.component.css']
})
export class GrupoboxlistComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }
grupolist: Grupo[];
  ngOnInit() {
    this.listarGrupo();
  }


  listarGrupo(){

    this.grupoService.getGrupo().subscribe(list=> this.grupolist=list)
  }


}
