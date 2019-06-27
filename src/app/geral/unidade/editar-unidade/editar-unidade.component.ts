import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../unidade.service';
import { Unidade } from '../unidade.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-unidade',
  templateUrl: './editar-unidade.component.html',
  styleUrls: ['./editar-unidade.component.css']
})
export class EditarUnidadeComponent implements OnInit {
  editarUnidadeForm: FormGroup;
  unidade: Unidade;
  sub: any;
  id: number;
  @Input() Hidden:boolean;
  constructor(
    private fb: FormBuilder,
    private undService: UnidadeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.createForm();
    this.Hidden=true;
    this.sub=this.route.params.subscribe(params=> {
      this.id=params['id'];
      this.undService.getById(this.id).subscribe(und=>{
        this.fullPopulate(und);
      })
    });
  }

  createForm(){
    this.editarUnidadeForm=this.fb.group({
      id:['',Validators.required],
      version: ['', Validators.required],
      descricao:['',Validators.required],
      sigla: ['',Validators.required]
    })
  }

  fullPopulate(und: Unidade){
    this.editarUnidadeForm.patchValue({
      id:und.id,
      version:und.version,
      sigla:und.sigla,
      descricao:und.descricao

    });

  }

  editarUnidade(){

    this.unidade=this.editarUnidadeForm.value;
    this.undService.editUnits(this.unidade).subscribe(resp=>{
      this.resetForm();
    });
  }

  resetForm(){
    this.editarUnidadeForm.reset()
  }
}
