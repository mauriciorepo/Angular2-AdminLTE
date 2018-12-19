import { FornecedorService } from './../fornecedor.service';
import { Mask } from './../../../mask';
import { TELEFONE, CNPJ,  CPF } from './../../../pattern.api';
import { CustomValidators } from './../../../show-errors/CustomValidators';
import { Fornecedor } from './fornecedor.model';

import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-cadastrofornecedor',
  templateUrl: './cadastrofornecedor.component.html'
})
export class CadastrofornecedorComponent implements OnInit {
  //j={value:"j"}
  //f={value:"f"}

  @Input() tipoForm="j";
  public mask=new Mask();
  fornecedor: Fornecedor;
  fornecedorForm: FormGroup;

constructor(private fb: FormBuilder, private fornecedorService: FornecedorService) {

  }

  ngOnInit() {

    this.createForm();
  }
  createForm() {
    this.fornecedorForm = this.fb.group({

      fantasia:new FormControl(null, [Validators.required , Validators.maxLength(255), Validators.minLength(3)/*,CustomValidators.uniqueName*/]),
      // id:new FormControl(null),
      'tipo': new FormControl('j'),
      ativo: new FormControl(true),
      razaosocial: ['', Validators.maxLength(255)],
       cnpj: ['', [Validators.maxLength(18), Validators.minLength(18)]],
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
  }

  cadastroFornecedor(){
    if(this.fornecedorForm.valid) {
      //console.log(this.fornecedorForm.);
      this.fornecedor = this.fornecedorForm.value;
      if(this.fornecedor.tipo === 'f'){
        this.fornecedor.rg=this.fornecedor.rg.replace(this.mask.unmask,'');
        this.fornecedor.cpf=this.fornecedor.cpf.replace(this.mask.unmask,'');
      }else{
        this.fornecedor.cnpj=this.fornecedor.cnpj.replace(this.mask.unmask, '');
        this.fornecedor.im=this.fornecedor.im.replace(this.mask.unmask,'');
        this.fornecedor.ie=this.fornecedor.ie.replace(this.mask.unmask,'');
      }

      this.fornecedor.cep=this.fornecedor.cep.replace(this.mask.unmask,'');
      this.fornecedor.telefone2=this.fornecedor.telefone2.replace(this.mask.unmask,'');
      this.fornecedor.telefone=this.fornecedor.telefone.replace(this.mask.unmask,'');

      console.log(this.fornecedor);
    return this.fornecedorService.cadastroFornecedor(this.fornecedor).subscribe(resp=> {
      console.log(resp);
      this.resteForm()});
    }

  }

  resteForm(){
   this.fornecedorForm.reset();
    // this.fornecedorForm.reset(this.fornecedorForm.value);
  }

  onSelectionClickFisica(){
    this.tipoForm="f";
    this.fornecedorForm.patchValue({razaosocial:'', cnpj:'',ie:'',im:''});
  }
 onselctionClickJuridico(){
   this.tipoForm="j";
   this.fornecedorForm.patchValue({rg:'', cpf:''});
 }

}
