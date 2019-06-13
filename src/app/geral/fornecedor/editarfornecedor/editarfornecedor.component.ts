import { TextMaskModule ,conformToMask} from 'angular2-text-mask';
import { Fornecedor } from './../cadastrofornecedor/fornecedor.model';
import { Mask } from './../../../mask';
import { CPF, CNPJ } from './../../../pattern.api';
import { FornecedorService } from './../fornecedor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editarfornecedor',
  templateUrl: './editarfornecedor.component.html'
})
export class EditarfornecedorComponent implements OnInit {

  @Input() tipoForm= 'j';
  @Input() Hidden: boolean;

  public mask= new Mask();
  fornecedor: Fornecedor;
  sub: any;
id: number;
fornecedorUpdateForm: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private fornecedorService: FornecedorService) {
               }

  ngOnInit() {
    this.createForm();
    this.Hidden = true;

    this.sub = this.route.params.subscribe(params => {
       // this.id=parseInt(params['id'],32);
       this.id = params['id'];
       this.fornecedorService.getFornecedorerById(this.id).subscribe(f => this.fullUpdate(f) );
     });
  }
createForm() {
  this.fornecedorUpdateForm = this.fb.group({

    fantasia: new FormControl(null, [Validators.required ,
                                     Validators.maxLength(255),
                                     Validators.minLength(3)]),
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
     bairro: [null, [Validators.maxLength(255)]]

  });
  //this.fullUpdate(f)
}

fullUpdate(forn: Fornecedor ) {
  // console.log(m.nome);
  this.tipoForm = forn.tipo;
  this.fornecedorUpdateForm.patchValue({
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
    version: forn.version
    // datainc:this.data
  }
    );
 }
resetForm() {
  this.fornecedorUpdateForm.reset();
   // this.fornecedorForm.reset(this.fornecedorForm.value);
 }

 onSelectionClickFisica() {
   this.tipoForm = 'f';
   this.fornecedorUpdateForm.patchValue({razaosocial: '', cnpj: '', ie: '', im: ''});
 }
onselctionClickJuridico() {
  this.tipoForm = 'j';
  this.fornecedorUpdateForm.patchValue({rg: '', cpf: ''});
}

editFornecedor() {
  if (this.fornecedorUpdateForm.valid) {
    this.fornecedor = this.fornecedorUpdateForm.value;
    if (this.fornecedor.tipo === 'f') {
      this.fornecedor.rg = this.fornecedor.rg.replace(this.mask.unmask, '');
      this.fornecedor.cpf = this.fornecedor.cpf.replace(this.mask.unmask, '');
    }else{
      this.fornecedor.cnpj = this.fornecedor.cnpj.replace(this.mask.unmask, '');
      this.fornecedor.im = this.fornecedor.im.replace(this.mask.unmask, '');
      this.fornecedor.ie = this.fornecedor.ie.replace(this.mask.unmask, '');
    }

    this.fornecedor.cep = this.fornecedor.cep.replace(this.mask.unmask, '');
    this.fornecedor.telefone2 = this.fornecedor.telefone2.replace(this.mask.unmask, '');
    this.fornecedor.telefone = this.fornecedor.telefone.replace(this.mask.unmask, '');
   console.log(this.fornecedor);
    /* Any API call logic via services goes here */
  return this.fornecedorService.editarFornecedor(this.fornecedor.id, this.fornecedor).subscribe(() => {
    this.resetForm();
    this.gotoList();
  });
  }

}
gotoList() {

  this.router.navigate(['starter', 'listfornecedor']);
}
}
