import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoSistema } from '../tipo-sistema.model';
import { TipoSistemaService } from '../tipo-sistema.service';

@Component({
  selector: 'app-cadastrotiposistema',
  templateUrl: './cadastrotiposistema.component.html',
  styleUrls: ['./cadastrotiposistema.component.css']
})
export class CadastrotiposistemaComponent implements OnInit {
  TipoSistemaForm: FormGroup;
  tipoSistema:TipoSistema;
  constructor(
   private fb: FormBuilder,
   private tipoSistemaService: TipoSistemaService
    ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm(){
      this.TipoSistemaForm=this.fb.group({
        descricao:['',Validators.required]
      });
  }
  resetForm(){
    this.TipoSistemaForm.reset();
  }
  cadastroTipoSistema(){
    if(this.TipoSistemaForm.valid){
      this.tipoSistema=this.TipoSistemaForm.value;
      this.tipoSistemaService.lancaTipoSistema(this.tipoSistema).subscribe(resp=>{
         this.resetForm();
      })
    }

  }

}
