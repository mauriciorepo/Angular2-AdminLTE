import { ClienteService } from './../cliente.service';
import { CNPJ, CPF } from './../../../pattern.api';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './../cliente.model';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { conformToMask } from 'angular2-text-mask';
import { Component, OnInit, Input } from '@angular/core';
import { Mask } from '../../../mask';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html'
})
export class EditarClienteComponent implements OnInit {

  @Input() tipoForm= 'j';
  @Input() Hidden: boolean;

  public mask= new Mask();
  cliente: Cliente;
  sub: any;
id: number;
clienteUpdateForm: FormGroup;
  constructor(
            private router: Router,
            private route: ActivatedRoute,
            private fb: FormBuilder,
            private clienteService: ClienteService) { }

  ngOnInit() {
    this.createForm();
    this.Hidden = true;

    this.sub = this.route.params.subscribe(params => {
       // this.id=parseInt(params['id'],32);
       this.id = params['id'];
       this.clienteService.getClienteById(this.id).subscribe(f => {
         this.cliente = f;
         console.log(f);
        this.fullUpdate(f); }
         );
     } );
  }
createForm() {
  this.clienteUpdateForm = this.fb.group({

    fantasia: new FormControl(null, [Validators.required , Validators.maxLength(255), Validators.minLength(3) ]),
     id: new FormControl(null),
     version: new FormControl(null),
    'tipo': new FormControl(null),
    ativo: new FormControl(true),
    razaosocial: ['', Validators.maxLength(255)],
     cnpj: ['', [Validators.maxLength(18), Validators.minLength(18), Validators.pattern(CNPJ)]],
     ie: ['', [Validators.maxLength(14), Validators.minLength(5)]],
     im: ['', [Validators.maxLength(14), Validators.minLength(5)]],
     cpf: ['', [Validators.maxLength(14), Validators.minLength(14), Validators.pattern(CPF)]],
     rg: ['', [Validators.maxLength(18), Validators.minLength(5)]],
     numero: [''],
     complemento: [null, [Validators.maxLength(255)]],
     cep: ['', [Validators.maxLength(9), Validators.minLength(8)]],
     telefone: ['', Validators.required],
     telefone2: [''],
     homepage: [null, [Validators.maxLength(255)]],
     logradouro: [null, [Validators.maxLength(255)]],
     bairro: [null, [Validators.maxLength(255)]],
     datainc: ['' ]

  });
  // this.fullUpdate(f)
}

fullUpdate(forn: Cliente ) {
  // console.log(m.nome);
  this.tipoForm = forn.tipo;
  this.clienteUpdateForm.patchValue({
    fantasia: forn.fantasia,
    tipo: forn.tipo,
    id: forn.id,
    // tipoatividade:forn.tipoatividade,
    razaosocial: forn.razaosocial,
    cnpj: conformToMask(forn.cnpj, this.mask.cnpjMask, {guide: false}).conformedValue,
    ie: forn.ie,
    im: forn.im,
    // suframa:forn.suframa,
    rg: conformToMask(forn.rg, this.mask.rgMask, {guide: false}).conformedValue,
    cpf: conformToMask(forn.cpf, this.mask.cpfMask, {guide: false}).conformedValue,
    ativo: forn.ativo,
    cep: conformToMask(forn.cep, this.mask.cepMask, {guide: false}).conformedValue,
    logradouro: forn.logradouro,
    numero: forn.numero,

    complemento: forn.complemento,
    bairro: forn.bairro,
    // ibge:forn.ibge,
    telefone2: conformToMask(forn.telefone2, this.mask.phoneMask, {guide: false}).conformedValue,
    // bloqueado:forn.bloqueado,
    // optantesn:forn.optantesn,
    // retpis:forn.retpis,
    // retconfins:forn.retconfins,
    // retirrf:forn.retirrf,
    // retcsll:forn.retcsll,
    // datainc2:this.data,
    telefone: conformToMask(forn.telefone, this.mask.phoneMask, {guide: false}).conformedValue,
    // databloqueio:forn.databloqueio,
    // datainativo:forn.datainativo,
    homepage: forn.homepage,
    version: forn.version,
    datainc: forn.datainc
  }
    );
 }
resetForm() {
  this.clienteUpdateForm.reset();
   // this.clienteForm.reset(this.clienteForm.value);
 }

 onSelectionClickFisica() {
   this.tipoForm = 'f';
   this.clienteUpdateForm.patchValue({razaosocial: '', cnpj: '', ie: '', im: ''});
 }
onselctionClickJuridico() {
  this.tipoForm = 'j';
  this.clienteUpdateForm.patchValue({rg: '', cpf: ''});
}

editCliente() {
  if (this.clienteUpdateForm.valid) {
    this.cliente = this.clienteUpdateForm.value;
    if (this.cliente.tipo === 'f') {
      this.cliente.rg = this.cliente.rg.replace(this.mask.unmask, '');
      this.cliente.cpf = this.cliente.cpf.replace(this.mask.unmask, '');
    }else {
      this.cliente.cnpj = this.cliente.cnpj.replace(this.mask.unmask, '');
      this.cliente.im = this.cliente.im.replace(this.mask.unmask, '');
      this.cliente.ie = this.cliente.ie.replace(this.mask.unmask, '');
    }

    this.cliente.cep = this.cliente.cep.replace(this.mask.unmask, '');
    this.cliente.telefone2 = this.cliente.telefone2.replace(this.mask.unmask, '');
    this.cliente.telefone = this.cliente.telefone.replace(this.mask.unmask, '');
    //this.cliente.datainc = this.clienteUpdateForm.get('datainc').value;
    console.log(this.cliente);
    /* Any API call logic via services goes here */
  return this.clienteService.editarCliente(this.cliente.id, this.cliente).subscribe(() => {
    this.resetForm();
    this.gotoList();
  });
  }

}
gotoList() {

  this.router.navigate(['starter', 'listcliente']);
}

}
