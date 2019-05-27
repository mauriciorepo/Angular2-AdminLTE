import { MarcaService } from './../marca.service';
import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca.model';


@Component({
  selector: 'app-marcaboxlist',
  templateUrl: './marcaboxlist.component.html'
})
export class MarcaboxlistComponent implements OnInit {
private   list: Marca[];
//let unirest = require('unirest');
// private  marca: Marca;
constructor(private marcaService: MarcaService) { }

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

}
