import { conformToMask } from 'angular2-text-mask';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Mask } from './../../../mask';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { ModeloServer } from './../../../modelo/modeloserver.model';
import { AnoModeloServer } from './../../../ano-modelo/ano-modelo-server.model';
import { MarcaServer } from './../../../marcas/marcaserver.model';
import { Modelo } from './../../../modelo/modelo.model';
import { Cliente } from './../../clientes/cliente.model';
import { VeiculoServer } from './../veiculo-server.model';

import { Veiculo } from '../veiculo.model';
import { VeiculoService } from './../veiculo.service';
import { ClienteService } from './../../clientes/cliente.service';
import { AnomodeloService } from './../../../ano-modelo/anomodelo.service';
import { ModeloService } from './../../../modelo/modelo.service';
import { MarcaService } from './../../../marcas/marca.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {
veiculoEditForm: FormGroup;
@Input() Hidden: boolean;
ano:number;
 today:number;
veiculo: Veiculo;
veiculoserver: VeiculoServer;
 listCliente: Cliente[];
 listModelo: Modelo[];
 listMarca: MarcaServer[];
 listAnoModelo: AnoModeloServer[];
 cliente: Cliente;
 marca: MarcaServer;
 marcaFilteredList: MarcaServer[];
 modelo: ModeloServer;
 anomodelo: AnoModeloServer;
public mask= new Mask();
sub: any;
id: number;
clienteid: number;
veiculo_id: number;

  constructor(
    private route: ActivatedRoute ,
              private marcaService: MarcaService,
              private modeloService: ModeloService,
              private anomodeloService: AnomodeloService,
              private fb: FormBuilder,
              private clienteService: ClienteService,
              private veiculoService: VeiculoService,
              private datePipe: DatePipe,
              private router: Router
  ) { }

  ngOnInit() {
    this.today=Date.now()
    //data:string;
    this.ano =parseInt(this.datePipe.transform(this.today, 'yyyy'),10) ; 
    //console.log(this.ano);
    this.Hidden = true;
    this.createForm();
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.id = params['id'];
      }
      if (params['clienteid'] != null) {
        this.clienteid = params['clienteid'];
      }
      console.log(params);
     // this.veiculo_id = params['veiculoid'];

    this.id = params['id'];
    this.veiculoService.findVeiculoById(this.id).subscribe(resp => {
   //console.log(resp);
   this.veiculoserver = resp;
      this.fullUpdate(resp);
    });


    });
    /*
   this.sub = this.route.params.subscribe((params: ParamMap) => {
    this.veiculo_id = params['veiculoid'];
    this.id = params['id'];

     console.log(this.id);
     console.log(this.veiculo_id);
     this.clienteService.getClienteById(this.id).subscribe(cli => {

       this.cliente = cli;
       this.fullUpdate(cli);

     });
     this.populaMarca();
   });*/
  }

/* 







*/
  createForm( ) {
    this.veiculoEditForm = this.fb.group({

       // id:new FormControl(null),
      // cliente_id: [''],
      'ativo': new FormControl(true),
      // razaosocial: ['', Validators.maxLength(255)],
       cor: [''],
       chassi: ['' , Validators.maxLength(17)],
       placa: ['', [Validators.required, Validators.minLength(8) , Validators.maxLength(8)]],
       renavam: ['' , [Validators.maxLength(11) , Validators.minLength(11)]],
       nummotor: ['',Validators.maxLength(30)],
       combustivel: ['', Validators.required],
       km: ['', [Validators.maxLength(255)]],
       volume: ['',[Validators.max(6),Validators.maxLength(1)]],
       pesomax: new FormControl('',[Validators.min(500),Validators.max(4000),Validators.maxLength(4)])/*['',[Validators.max(4000),Validators.maxLength(4)]]*/,
       altura: ['',Validators.maxLength(1)],
       comprimento: ['',[Validators.max(4),Validators.min(1)]],
       potencia: ['',Validators.max(5)],
       portas: ['',[Validators.max(7),Validators.min(2),Validators.maxLength(1)]],
       // categoria: [''],
       // clientefantasia: [{value: '', disabled: true}, Validators.required],
       modelo_id: [{value: '', disable: true}, Validators.required],
       marca_id: ['',Validators.required],
       //anomodelo_id: [{value: '', disable: true}, Validators.required],
       anomodelo:['',Validators.required],
       id: [null],
       version: [null]

    });
  }
editarVeiculo() {
  if (this.veiculoEditForm.valid) {
    this.veiculo = this.veiculoEditForm.value;
   // this.cliente.id = this.veiculoEditForm.get('cliente_id').value;
   // this.cliente.fantasia = this.veiculoEditForm.get('clientefantasia').value;
    // this.veiculoserver.cliente = {id: this.veiculoEditForm.get('cliente_id').value}; /*this.cliente;*/
    this.montaVeiculoObject(this.veiculo);

    // this.marca = {id: this.veiculoEditForm.get('marca_id').value};
    // this.modelo = {id: this.veiculoEditForm.get('modelo_id').value};
    // this.anomodelo = {id: this.veiculoEditForm.get('anomodelo_id').value};
    this.getMarcaOnListByID(parseInt(this.veiculoEditForm.get('marca_id').value, 10));
    this.getModeloOnListByID(parseInt(this.veiculoEditForm.get('modelo_id').value, 10));
   // this.getAnoModeloOnListByID(parseInt(this.veiculoEditForm.get('anomodelo_id').value, 10));

    this.veiculoserver.marca = this.marca;
    this.veiculoserver.modelo = this.modelo;
    //this.veiculoserver.anomodelo = this.anomodelo;

    return this.veiculoService.editarVeiculo(this.veiculoserver, this.clienteid).subscribe(resp => {
      console.log(resp);
      this.resetForm();
      this.veiculoNavigate()

    });

    /* this.cliente.veiculo.push(this.veiculoserver);
    console.log(this.cliente);
    return this.veiculoService.editarVeiculo(this.cliente).subscribe( resp => {
      console.log(resp);
      this.resetForm();
    });*/

   /* if(this.cliente.tipo === 'f'){
      this.cliente.rg=this.cliente.rg.replace(this.mask.unmask,'');
      this.cliente.cpf=this.cliente.cpf.replace(this.mask.unmask,'');
    }else{
      this.cliente.cnpj=this.cliente.cnpj.replace(this.mask.unmask, '');
      this.cliente.im=this.cliente.im.replace(this.mask.unmask,'');
      this.cliente.ie=this.cliente.ie.replace(this.mask.unmask,'');
    }

    this.cliente.cep=this.cliente.cep.replace(this.mask.unmask,'');
    this.cliente.telefone2=this.cliente.telefone2.replace(this.mask.unmask,'');
    this.cliente.telefone=this.cliente.telefone.replace(this.mask.unmask,'');

    console.log(this.cliente);
  return this.clienteService.cadastroCliente(this.cliente).subscribe(resp=> {
    console.log(resp);
    this.resteForm()});
  */}
  }

  fullUpdate(veic: VeiculoServer ) {

    this.populaDadosMarcaModeloAno();
    console.log(veic.placa);
    this.veiculoEditForm.patchValue({
      ativo: veic.ativo,
      id: veic.id,
      // razaosocial: ['', Validators.maxLength(255)],
       cor: veic.cor,
       chassi: veic.chassi,
       placa: conformToMask(veic.placa, this.mask.placamask, {guide: false}).conformedValue ,
       renavam: veic.renavam,
       nummotor: veic.nummotor,
       combustivel: veic.combustivel,
       km: veic.km,
       volume: veic.volume,
       pesomax: veic.pesomax,
       altura: veic.potencia,
       comprimento: veic.comprimento,
       potencia: veic.potencia,
       portas: veic.portas,
       // categoria: [''],
       // clientefantasia: ,
              marca_id: veic.marca.id,
              modelo_id: veic.modelo.id,

              //anomodelo_id: veic.anomodelo.id,
              anomodelo:veic.anomodelo,
              version: veic.version


    });

  }
  populaDadosMarcaModeloAno() {
    this.populaMarca();
    this.listModelo = this.veiculoserver.marca.modelo;
    this.listAnoModelo = this.veiculoserver.modelo.anoModelo;
  }
  populaMarca() {
    this.marcaService.getmarca().subscribe(marcas => this.listMarca = marcas);
  }
  findModelo (id: number) {

    this.veiculo = this.veiculoEditForm.value;
    this.modeloService.getModeloByMarca(this.veiculoEditForm.get('marca_id').value).subscribe(modelos => {
    this.listModelo = modelos;
    
    }  );
  }

  /*findAnoModelo(id: number) {

    this.anomodeloService.getAnoModeloByModelo(this.veiculoEditForm.get('modelo_id').value).subscribe(anomodelos => {
    this.listAnoModelo = anomodelos;
    }  );
  }*/

  resetForm() {
    this.veiculoEditForm.reset();

   }

  montaVeiculoObject(veic: VeiculoServer) {


    // tslint:disable-next-line:prefer-const
    this.veiculoserver = {
      altura: veic.altura,
      ativo: veic.ativo,
      chassi: veic.chassi,
      combustivel: veic.combustivel,
      comprimento: veic.comprimento,
      cor: veic.cor,
      km: veic.km,
      nummotor: veic.nummotor,
      pesomax: veic.pesomax,
      placa: veic.placa.replace(this.mask.placaunmask, ''),
      portas: veic.portas,
      potencia: veic.potencia,
      volume: veic.volume,
      renavam: veic.renavam,
      id: veic.id,
      version: veic.version,
      anomodelo:veic.anomodelo


    };

}

pesquisaMarca(val: string) {

  this.marcaService.getMarcaByLike(val).subscribe();


 }

 getMarcaOnListByID(id: number) {
    console.log(this.listMarca);
    this.listMarca.forEach((marca: MarcaServer) => {
      if (marca.id === id) {
       this.marca = marca;
      }


    });

 }

 getModeloOnListByID(id: number) {

   this.listModelo.forEach((modelo: ModeloServer) => {
     if (modelo.id === id) {
        this.modelo = modelo;
     }
   });

 }
 veiculoNavigate() {
   this.router.navigate(['starter', 'listveiculos', this.veiculo.id]);

}

 /*getAnoModeloOnListByID(id: number) {

   this.listAnoModelo.forEach((anomodelo: AnoModeloServer) => {
     if (anomodelo.id === id) {
        this.anomodelo = anomodelo;

     }
   });
 }*/

}
