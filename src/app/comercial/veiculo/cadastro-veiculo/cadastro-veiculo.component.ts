
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { Mask } from './../../../mask';

import { MarcaService } from './../../../marcas/marca.service';

import { Cliente } from './../../clientes/cliente.model';
import { Modelo } from './../../../modelo/modelo.model';
import { ClienteService } from './../../clientes/cliente.service';
import { VeiculoService } from './../veiculo.service';
import { MarcaServer } from './../../../marcas/marcaserver.model';
import { ModeloServer } from './../../../modelo/modeloserver.model';
import { VeiculoServer } from './../veiculo-server.model';
import { AnoModeloServer } from './../../../ano-modelo/ano-modelo-server.model';
import { Veiculo } from './../veiculo.model';
import { AnomodeloService } from './../../../ano-modelo/anomodelo.service';

import { ModeloService } from './../../../modelo/modelo.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html'
})
export class CadastroVeiculoComponent implements OnInit {
veiculoForm: FormGroup;
@Input() Hidden: boolean;

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
showDropDown = false;
  constructor(
              private route: ActivatedRoute ,
              private marcaService: MarcaService,
              private modeloService: ModeloService,
              private anomodeloService: AnomodeloService,
              private fb: FormBuilder,
              private clienteService: ClienteService,
              private veiculoService: VeiculoService
          ) { }

  ngOnInit() {
    this.Hidden = true;
    this.createForm();
   this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
     this.clienteService.getClienteById(this.id).subscribe(cli => {

       this.cliente = cli;
       this.fullUpdate(cli);

     });
     this.populaMarca();
   });

  }
  createForm( ) {
    this.veiculoForm = this.fb.group({

      // id:new FormControl(null),
      cliente_id: [''],
      'ativo': new FormControl(true),
      //razaosocial: ['', Validators.maxLength(255)],
       cor: [''],
       chassi: ['' , Validators.maxLength(17)],
       placa: [null, [Validators.required, Validators.minLength(8) , Validators.maxLength(8)]],
       renavam: ['' , [Validators.maxLength(11) , Validators.minLength(11)]],
       nummotor: [''],
       combustivel: ['', Validators.required],
       km: ['', [Validators.maxLength(255)]],
       volume: [''],
       pesomax: [''],
       altura: [''],
       comprimento: [null],
       potencia: [null],
       portas: [null],
       //categoria: [''],
       clientefantasia: [{value: '', disabled: true}, Validators.required],
       modelo_id: [{value: '', disable: true}, Validators.required],
       marca_id: [null],
       anomodelo_id: [{value: '', disable: true}, Validators.required]

    });
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

  getAnoModeloOnListByID(id: number) {

    this.listAnoModelo.forEach((anomodelo: AnoModeloServer) => {
      if (anomodelo.id === id) {
         this.anomodelo = anomodelo;

      }
    });
  }
  populaMarca() {
    this.marcaService.getmarca().subscribe(marcas => this.listMarca = marcas);
  }

  fullUpdate(cli: Cliente ) {

    this.veiculoForm.patchValue({
      cliente_id: cli.id,
      clientefantasia: cli.fantasia

    });

  }

  cadastroVeiculo() {
    if (this.veiculoForm.valid) {
      this.veiculo = this.veiculoForm.value;
      this.cliente.id = this.veiculoForm.get('cliente_id').value;
      this.cliente.fantasia = this.veiculoForm.get('clientefantasia').value;
      // this.veiculoserver.cliente = {id: this.veiculoForm.get('cliente_id').value}; /*this.cliente;*/
      this.montaVeiculoObject(this.veiculo);

      // this.marca = {id: this.veiculoForm.get('marca_id').value};
      // this.modelo = {id: this.veiculoForm.get('modelo_id').value};
      // this.anomodelo = {id: this.veiculoForm.get('anomodelo_id').value};
      this.getMarcaOnListByID(parseInt(this.veiculoForm.get('marca_id').value, 10));
      this.getModeloOnListByID(parseInt(this.veiculoForm.get('modelo_id').value, 10));
      this.getAnoModeloOnListByID(parseInt(this.veiculoForm.get('anomodelo_id').value, 10));

      this.veiculoserver.marca = this.marca;
      this.veiculoserver.modelo = this.modelo;
      this.veiculoserver.anomodelo = this.anomodelo;

      this.cliente.veiculo.push(this.veiculoserver);
      console.log(this.cliente);
      return this.veiculoService.cadastroVeiculo(this.cliente).subscribe( resp => {
        console.log(resp);
        this.resetForm();
      });
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
        placa: veic.placa.replace(this.mask.unmask, ''),
        portas: veic.portas,
        potencia: veic.potencia,
        volume: veic.volume,
        renavam: veic.renavam,

      };

  }
  resetForm() {
    this.veiculoForm.reset();

   }


  selectValue(value) {
    this.veiculoForm.patchValue({marca_id: value});
    this.showDropDown = false;
  }



  getSearchValue() {
    return this.veiculoForm.value.search;
  }
  findModelo() {

    this.veiculo = this.veiculoForm.value;
    this.modeloService.getModeloByMarca(this.veiculoForm.get('marca_id').value).subscribe(modelos => {
    this.listModelo = modelos;
    this.listAnoModelo = null;
    }  );
  }

  findAnoModelo() {

    this.anomodeloService.getAnoModeloByModelo(this.veiculoForm.get('modelo_id').value).subscribe(anomodelos => {
    this.listAnoModelo = anomodelos;
    }  );
  }

}
