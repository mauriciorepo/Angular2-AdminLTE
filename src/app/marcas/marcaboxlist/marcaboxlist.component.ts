import { MarcaService } from './../marca.service';
import { XVICTUM_API } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca.model';

@Component({
  selector: 'app-marcaboxlist',
  templateUrl: './marcaboxlist.component.html'
})
export class MarcaboxlistComponent implements OnInit {
list: Marca[];
marca: Marca;
constructor(private marcaService: MarcaService) { }

  ngOnInit() {

    this.marcaService.get().subscribe(marca => {
       this.list = marca/*,
    this.populateMarca(this.list)*/});

  }
  populateMarca(marcaList: Marca[]){
      for (let lista of marcaList) {
    //console.log(lista); // 1, "string", false
    this.marcaService.cadastroMarca(lista).subscribe(resp => console.log( resp))
}
  }

}
