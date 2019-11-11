import { Component, OnInit, Input } from '@angular/core';
import { TiposervicoService } from '../tiposervico.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tiposervico } from '../tiposervico.model.';

@Component({
  selector: 'app-editartiposervico',
  templateUrl: './editartiposervico.component.html',
  styleUrls: ['./editartiposervico.component.css']
})
export class EditartiposervicoComponent implements OnInit {
  editarTipoServicoForm: FormGroup;
  sub: any;
  id: number;
  tipo_servico_Entity: Tiposervico;
  @Input() Hidden:boolean;
  constructor(
    private tipoServico: TiposervicoService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
     this.createForm();
     this.Hidden=true;
     this.sub=this.route.params.subscribe(params=>{
       this.id=params['id'];
       this.tipoServico.findById(this.id).subscribe(tiposervico=>{
         this.populateTipoServico(tiposervico);
       });
     })
  }

  createForm(){
    this.editarTipoServicoForm= this.fb.group({
      descricao: ['', Validators.required],
      version: ['', Validators.required],
      id:['',Validators.required]
    })
  }

  resetForm(){
    this.editarTipoServicoForm.reset();
  }
  populateTipoServico(tipo: Tiposervico){

    this.editarTipoServicoForm.patchValue({
      descricao: tipo.descricao,
      version: tipo.version,
      id: tipo.id
    })
  }

  editarTipoServico(){
    if(this.editarTipoServicoForm.valid){
     this.tipo_servico_Entity=this.editarTipoServicoForm.value;
     this.tipoServico.editarTipoServico(this.tipo_servico_Entity).subscribe(resp=>{
       this.resetForm();
     });
    }
  }
}
