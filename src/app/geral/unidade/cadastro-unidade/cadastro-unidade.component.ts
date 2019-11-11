import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Unidade } from '../unidade.model';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.css']
})
export class CadastroUnidadeComponent implements OnInit {

  unidadeForm: FormGroup;
unidade: Unidade;
  constructor(
    private fb: FormBuilder, 
    private unidadeService: UnidadeService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){

    this.unidadeForm=this.fb.group({
      descricao: ['',[Validators.required,Validators.maxLength(255)]],
      sigla: ['',[Validators.required,Validators.maxLength(20)]]
    });
  }

  cadastroUnidade(){
    if(this.unidadeForm.valid){

      this.unidade=this.unidadeForm.value;
      this.unidadeService.launchUnits(this.unidade).subscribe(response=>{
        console.log("Lançado");
        this.reset();
      });
    }

  }

  reset(){
    this.unidadeForm.reset();
  }


}
