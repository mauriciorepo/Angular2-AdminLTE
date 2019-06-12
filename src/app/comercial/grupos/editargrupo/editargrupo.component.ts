import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo.model';

@Component({
  selector: 'app-editargrupo',
  templateUrl: './editargrupo.component.html',
  styleUrls: ['./editargrupo.component.css']
})
export class EditargrupoComponent implements OnInit {

  editGrupoForm: FormGroup;
  grupo: Grupo;
  num: number;
  grupolist: Grupo[];
  subGrupoList: Grupo[];
  sub: any;
  id:number;
  @Input() Hidden:boolean;
  constructor(private route: ActivatedRoute,private editGrupoService: GrupoService, private fb: FormBuilder) {
             

   }

  ngOnInit() {
     this.createForm();
     this.Hidden=true;
     this.sub=this.route.params.subscribe(params=>{
      this.id=params['id'];
        this.editGrupoService.findById(this.id).subscribe(grupo=> {
          console.log(grupo);
          this.populateGrupo(grupo);
          
        });
     });
    }

  createForm(){

    this.editGrupoForm=this.fb.group({

      descricao: ['', [Validators.required,Validators.maxLength(255)]],
      nivel: ['',[Validators.max(50),Validators.maxLength(2)]],
      origem: ['', Validators.maxLength(3)],
      version:['',Validators.required],
      id:['',Validators.required]
    });
  }



  populateGrupo(grup: Grupo){

    this.populateOrigem(grup.nivel)
   this.editGrupoForm.patchValue({
     descricao:grup.descricao,
     nivel:grup.nivel,
     origem:grup.origem,
     id:grup.id,
     version:grup.version
   });
            

  }

  populateOrigem(nivel: number){
    nivel=nivel-1;
    this.editGrupoService.findGrupoByNivel(nivel).subscribe(list=>{
       this.grupolist=list;
    });
  }
  cadastroGrupo(){
    this.grupo=this.editGrupoForm.value;
    console.log(this.grupo);
    this.editGrupoService.editarGrupo(this.grupo).subscribe(resp=> {
      console.log('foi');
      this.editGrupoForm.reset();
      
      
    });


  }
  findOrigem() {

    this.grupo = this.editGrupoForm.value;
    this.num=this.grupo.nivel-1;
    console.log(this.num);
    this.editGrupoService.findGrupoByNivel(this.num).subscribe(grupos => {
    this.grupolist = grupos;
    
    }  );
  }

}
