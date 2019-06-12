import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo.model';

@Component({
  selector: 'app-cadastrogrupo',
  templateUrl: './cadastrogrupo.component.html',
  styleUrls: ['./cadastrogrupo.component.css']
})
export class CadastrogrupoComponent implements OnInit {
grupoForm: FormGroup;
grupo: Grupo;
grupolist: Grupo[];
sub: any;
num: number;
  constructor(private fb: FormBuilder,private grupoService: GrupoService ) { }

  ngOnInit() {

    this.createForm();

    //this.sub=this.grupoService.
  }

  createForm(){

    this.grupoForm=this.fb.group({

      descricao: ['', [Validators.required,Validators.maxLength(255)]],
      nivel: ['',[Validators.max(50),Validators.maxLength(2)]],
      origem: ['', Validators.maxLength(3)]
    });
  }


  cadastroGrupo(){
    this.grupo=this.grupoForm.value;
    console.log(this.grupo);
    this.grupoService.lancarGrupo(this.grupo).subscribe(resp=> {
      console.log('foi');
      this.grupoForm.reset();
      
      
    });


  }
  findOrigem() {

    this.grupo = this.grupoForm.value;
    this.num=this.grupo.nivel-1;
    console.log(this.num);
    this.grupoService.findGrupoByNivel(this.num).subscribe(grupos => {
    this.grupolist = grupos;
    
    }  );
  }
}
