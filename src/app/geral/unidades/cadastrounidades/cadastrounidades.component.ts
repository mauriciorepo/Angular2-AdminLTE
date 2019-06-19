import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../unidade.service';
import { Unidades } from '../unidade.model';

@Component({
  selector: 'app-cadastrounidades',
  templateUrl: './cadastrounidades.component.html',
  styleUrls: ['./cadastrounidades.component.css']
})
export class CadastrounidadesComponent implements OnInit {
unidadeForm: FormGroup;
unidade: Unidades;
  constructor(
    private fb: FormBuilder, 
    private unidadeService: UnidadeService) { }

  ngOnInit() {
    this.createForm
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
      });
    }
    
  }

}
