import { Component, OnInit } from '@angular/core';
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
  constructor(
    private fb: FormBuilder,
    private undService: UnidadeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.createForm();
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

    });

  }
}
