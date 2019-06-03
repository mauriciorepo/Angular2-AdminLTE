import { MarcaService } from './../marca.service';
import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca.model';

import { ModeloService } from '../../modelo/modelo.service';
import { Modelo } from '../../modelo/modelo.model';


@Component({
  selector: 'app-marcaboxlist',
  templateUrl: './marcaboxlist.component.html'
})
export class MarcaboxlistComponent implements OnInit {
private   list: Marca[];
marca:Marca;
//let unirest = require('unirest');
// private  marca: Marca;
constructor(private marcaService: MarcaService , private modeloService: ModeloService) { }

  ngOnInit() {

     // this.marcaService.getMarcaMarshape().subscribe(marc => {this.list = marc; //);
    this.marcaService.get().subscribe(marc => {
       this.list = marc;
     //this.populateMarca(this.list);
  }
    );

  }
  populateMarca(marcaList: Marca[]) {
      for (let lista of marcaList) {
     //console.log(lista); // 1, "string", false
    this.marcaService.cadastroMarca(lista).subscribe(resp => console.log('aded'));
}
  }

  lancaModelo(id: number){
     console.log(id)
     this.marca=null;
    for(let listaMarca of this.list){
      if(listaMarca.id===id){
          this.marca=listaMarca
      }
    }
    this.modeloService.getModeloMarshape(this.marca.codigo).subscribe((listMode:Modelo[]) => {
      
      //this.populateModelo(marca.id ,listMode)
     this.modeloService.cadastroModeloByList(this.marca.id , listMode).subscribe(resp=> console.log("foi"));
    });
     
  }

}
