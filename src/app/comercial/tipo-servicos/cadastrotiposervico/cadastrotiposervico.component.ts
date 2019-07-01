import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposervicoService } from '../tiposervico.service';
import { Tiposervico } from '../tiposervico.model.';

@Component({
  selector: 'app-cadastrotiposervico',
  templateUrl: './cadastrotiposervico.component.html',
  styleUrls: ['./cadastrotiposervico.component.css']
})
export class CadastrotiposervicoComponent implements OnInit {
  tipoServicoForm: FormGroup;
  tipo: Tiposervico;
  constructor(
    private fb: FormBuilder,
    private tipo_Service:TiposervicoService
    ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.tipoServicoForm=this.fb.group({
      descricao: ['',Validators.required]
    });
  }
   resetForm(){
     this.tipoServicoForm.reset();
   }
  cadastroTipoServico(){
    this.tipo=this.tipoServicoForm.value;
    console.log(this.tipo)

    this.tipo_Service.lancaTipoServico(this.tipo).subscribe(resp=>{
       console.log("foi");
       this.resetForm();
    });
  }
}
