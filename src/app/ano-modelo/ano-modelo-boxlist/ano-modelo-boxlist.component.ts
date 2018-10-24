import { MarcaService } from './../../marcas/marca.service';
import { ActivatedRoute } from '@angular/router';
import { AnoModeloServer } from './../ano-modelo-server.model';
import { Marca } from './../../marcas/marca.model';
import { ModeloService } from './../../modelo/modelo.service';
import { AnomodeloService } from './../anomodelo.service';
import { AnoModelo } from './../ano-modelo.model';
import { Component, OnInit } from '@angular/core';
import { ModeloServer } from '../../modelo/modeloserver.model';

@Component({
  selector: 'app-ano-modelo-boxlist',
  templateUrl: './ano-modelo-boxlist.component.html'
})
export class AnoModeloBoxlistComponent implements OnInit {
    anomodelolist: AnoModelo[];
    modelolist: ModeloServer[];
    anomodeloserver:AnoModeloServer;
    id: number;
    sub:any;
  constructor(private anomodeloservice: AnomodeloService, private marcaservice: MarcaService,private modeloservice: ModeloService, private route: ActivatedRoute) { }

  ngOnInit() {
      //this.getmarca()
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];

       this.marcaservice.getMarcaById(this.id).subscribe((m: Marca) => this.getModeloByMarca(m));
    });
  }
  getmarca(){
    this.modeloservice.getmarca().subscribe((marca: Marca[]) => this.getModelo(marca))
  }
  getModeloByMarca(marca:  Marca){
    this.modeloservice.getModeloByMarca(marca.id).subscribe((modelo:ModeloServer[]) => this.getAnoModelo(marca.codigo,modelo))

  }
  getModelo(marca:  Marca[]){
    for (let index = 0; index <  marca.length; index++) {
      //const element = marca[index];
     // console.log(marca[index].codigo)
      this.modeloservice.getModeloByMarca(marca[index].id).subscribe((modelo:ModeloServer[]) => this.getAnoModelo(marca[index].codigo,modelo))
    }

  }
  getAnoModelo(codigoMarca:number,modelo: ModeloServer[]){
    for (let index = 0; index < modelo.length; index++) {
      //const element = modelo[index];
      this.anomodeloservice.getAnoModelo(codigoMarca,modelo[index]).subscribe((anomodelo: AnoModelo[])=> this.lancarAnoModelo(modelo[index].id,anomodelo)/*console.log(anomodelo)*/)
    }

  }

  lancarAnoModelo(idModelo: number, anoModeloList:AnoModelo[]){
    for (let index = 0; index < anoModeloList.length; index++) {
      //const element = modelo[index];
      //this.anomodeloserver={id:ano}
      //anoModeloList[index].modelo_id=
      this.anomodeloservice.cadastroAnoModelo(idModelo, anoModeloList[index]).subscribe((anomodelo: AnoModelo)=> console.log(anomodelo))
    }

  }


}
