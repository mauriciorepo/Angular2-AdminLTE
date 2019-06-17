import { Component, OnInit, Input } from '@angular/core';

import { FabricanteService } from '../fabricante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fabricante } from '../fabricante.model';

@Component({
  selector: 'app-editarfabricante',
  templateUrl: './editarfabricante.component.html',
  styleUrls: ['./editarfabricante.component.css']
})
export class EditarfabricanteComponent implements OnInit {

  fabricanteEditForm: FormGroup;
  fabricante: Fabricante;
  sub: any;
  id: number;
  @Input() Hidden: Boolean;
  constructor(
    private fb: FormBuilder,
    private fabricanteService: FabricanteService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
    this.Hidden=true;
     this.sub=this.route.params.subscribe(params=>{
       this.id=params['id'];
       this.fabricanteService.getFabricanteById(this.id).subscribe(fab=>{
         this.fabricante=fab;
         this.fullUpdate(fab);
       });
     });
  }

  createForm(){

    this.fabricanteEditForm = this.fb.group({
      descricao: ['',Validators.required],
      id: ['',Validators.required],
      version: ['', Validators.required]
    });
  }
  fullUpdate(fab: Fabricante){
    this.fabricanteEditForm.patchValue({
    descricao:fab.descricao,
    id: fab.id,
    version: fab.version

    });
  }

  editarFabricante(){
    if(this.fabricanteEditForm.valid){

      this.fabricante=this.fabricanteEditForm.value;
      this.fabricanteService.editarFabricante(this.fabricante).subscribe(resp=>{
        console.log('foi');
        this.fabricanteEditForm.reset();
      });
    }
    
  }
  gotoList() {

    this.router.navigate(['starter', 'listcliente']);
  }


}
