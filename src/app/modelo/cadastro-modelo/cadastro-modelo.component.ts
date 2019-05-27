import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../modelo.service';
import { ModeloServer } from '../modeloserver.model';
import { MarcaServer } from '../../marcas/marcaserver.model';



@Component({
  selector: 'app-cadastro-modelo',
  templateUrl: './cadastro-modelo.component.html',
  styleUrls: ['./cadastro-modelo.component.css']
})
export class CadastroModeloComponent implements OnInit {

  constructor( private modeloservice: ModeloService) { }
   
   listmodelo: ModeloServer[];
 private   marca :MarcaServer;
   modelo: ModeloServer;  
  ngOnInit() {
  }

  createModelo(){
    

    this.modeloservice.cadastroModeloTeste().subscribe(resp => console.log(resp));
    


  }
}
