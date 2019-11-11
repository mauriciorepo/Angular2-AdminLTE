import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposervicoService } from '../../tipo-servicos/tiposervico.service';
import { TipoSistema } from '../tipo-sistema.model';
import { ActivatedRoute } from '@angular/router';
import { TipoSistemaService } from '../tipo-sistema.service';

@Component({
  selector: 'app-editartiposistema',
  templateUrl: './editartiposistema.component.html',
  styleUrls: ['./editartiposistema.component.css']
})
export class EditartiposistemaComponent implements OnInit {
  editarTipoSistemaForm: FormGroup;
  @Input() Hidden: boolean;
  sub:any;
  id:number;
  tipoSistema: TipoSistema;
  constructor(
    private fb: FormBuilder,
    private tipoSistemaService: TipoSistemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.Hidden=true;
    this.sub=this.route.params.subscribe(params=>{
    this.id=params['id'];
    this.tipoSistemaService.findById(this.id).subscribe(tipo=>{
      this.populateTipoSistema(tipo);
    })

    })
  }


  createForm(){
    this.editarTipoSistemaForm=this.fb.group({
      descricao: ['', Validators.required],
      id:['',Validators.required],
      version: ['', Validators.required]
    })
  }


  populateTipoSistema(tipo: TipoSistema){

    this.editarTipoSistemaForm.patchValue({
      descricao: tipo.descricao,
      id:tipo.id,
      version:tipo.version
    })

  }

  resetForm(){
    this.editarTipoSistemaForm.reset();

  }
  editarTipoSistema(){
    if(this.editarTipoSistemaForm.valid){
      this.tipoSistema=this.editarTipoSistemaForm.value;
      this.tipoSistemaService.editarTipoSistema(this.tipoSistema).subscribe(resp=>{
         this.resetForm();
      });

    }
  }

}
