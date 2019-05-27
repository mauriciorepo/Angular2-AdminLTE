import { ModeloServer } from './../modeloserver.model';
import { MarcaServer } from './../../marcas/marcaserver.model';
import { Marca } from './../../marcas/marca.model';
import { Observable } from 'rxjs/Rx';
import { MarcaService } from './../../marcas/marca.service';
import { ActivatedRoute } from '@angular/router';
import { Modelo } from './../modelo.model';
import { ModeloService } from './../modelo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modeloboxlist',
  templateUrl: './modeloboxlist.component.html',
  styleUrls: ['./modeloboxlist.component.css']
})
export class ModeloboxlistComponent implements OnInit {
id:number;
sub: Subscription;
list: Modelo[];
listModelo: Modelo[];
modelo: Modelo;
Refmarca: Marca;
marcaserver: MarcaServer;
modeloserver: ModeloServer
modeloList: ModeloServer[];

marcas:Marca[];
Listamarca: Marca[];
  constructor(private modeloservice: ModeloService,private marcaService: MarcaService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getmarca()

   // this.modeloservice.getmodeloServer().subscribe(model => {
     //  this.modeloList = model/*,     this.populateMarca(this.list)*/
    //});

  }
  getmarca(){

    this.modeloservice.getmarca().subscribe((marca: Marca[]) => {this.testeMarca(marca) })


  }
testeMarca(lista: Marca[]){
  //console.log(lista);

  for(let marca of lista){
    this.getModelo(marca);
   }
}
  getModelo(marca:Marca){
    this.modeloservice.getModeloMarshape(marca.codigo).subscribe((listMode:Modelo[]) => {
      
      //this.populateModelo(marca.id ,listMode)
      this.modeloservice.cadastroModeloByMarca(marca.id ,listMode);
    });
    


  }
  populateModelo(id: number, modeloList: Modelo[]){
    console.log(modeloList) 

  /* this.Refmarca.id=id;
   this.Refmarca.modelo=modeloList;
   this.marcaService.cadastroMarca(this.Refmarca).subscribe(resp => console.log( resp))
*/this.marcaserver=null;
this.marcaserver={ id: id, codigo:null, nome:'' , modelo: [] }

   for (let lista=0; lista <  modeloList.length; lista++) {
    //this.Refmarca=null;
    //this.Refmarca={ id: id, codigo:null, nome:''  }
    
     // modeloList[lista].marca=this.Refmarca;
      //modeloList[lista].codigo=modeloList[lista].id
      //modeloList[lista].modelo =modeloList[lista].fipe_name
      this.modeloserver=null;
      this.modeloserver={  codigo:modeloList[lista].id, modelo:modeloList[lista].fipe_name , /*marca: this.marcaserver,*/  }
    this.marcaserver.modelo.push(this.modeloserver)
      // this.modeloserver.marca=this.marcaserver;
     // this.modeloserver.codigo=modeloList[lista].id
      //this.modeloserver.modelo=modeloList[lista].fipe_name
      //console.log("ID:"+ lista.marca);
    //console.log(modeloList[lista]);
   

}
this.lancarModelo(this.marcaserver)

  }
   lancarModelo(marca: MarcaServer){

    //this.modeloservice.cadastroModeloByMarca(marca).subscribe(resp => console.log( resp))
   }


}
