import { CPF } from './../../../pattern.api';
import { ClienteService } from './../cliente.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Cliente } from './../cliente.model';
import { Mask } from './../../../mask';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html'
})
export class CadastroClienteComponent implements OnInit {


  @Input() tipoForm= 'f';
  public mask= new Mask();
  cliente: Cliente;
  clienteForm: FormGroup;

constructor(private fb: FormBuilder, private clienteService: ClienteService) {

  }

  ngOnInit() {

    this.createForm();
  }
  createForm() {
    this.clienteForm = this.fb.group({

      fantasia: new FormControl(null, [Validators.required , Validators.maxLength(255), Validators.minLength(3)]),
      // id:new FormControl(null),
      'tipo': new FormControl('f'),
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

  cadastrocliente() {
    if (this.clienteForm.valid) {

      this.cliente = this.clienteForm.value;
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

      console.log(this.cliente);
    return this.clienteService.cadastroCliente(this.cliente).subscribe(resp => {
      console.log(resp);
      this.resetForm(); } );
    }

  }

  resetForm() {
   this.clienteForm.reset();
    // this.clienteForm.reset(this.clienteForm.value);
  }

  onSelectionClickFisica() {
    this.tipoForm = 'f';
    this.clienteForm.patchValue({razaosocial: '', cnpj: '', ie: '', im: ''});
  }
 onselctionClickJuridico() {
   this.tipoForm = 'j';
   this.clienteForm.patchValue({rg: '', cpf: ''});
 }

}
