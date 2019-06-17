import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FabricanteService } from '../fabricante.service';
import { Fabricante } from '../fabricante.model';

@Component({
  selector: 'app-cadastrofabricante',
  templateUrl: './cadastrofabricante.component.html',
  styleUrls: ['./cadastrofabricante.component.css']
})
export class CadastrofabricanteComponent implements OnInit {
fabricanteForm: FormGroup;
fabricante: Fabricante; 
constructor(private fb: FormBuilder, private fabricanteService: FabricanteService) { }

  ngOnInit() {
     this.createForm();
  }


  createForm(){
    this.fabricanteForm=this.fb.group({

      descricao:['',Validators.required]
    });
  }

  resetForm(){
    this.fabricanteForm.reset();
  }
  cadastroFabricante(){
    this.fabricante=this.fabricanteForm.value;
    //console.log(this.fabricante);
     this.fabricanteService.lancaFabricante(this.fabricante).subscribe(resp=>{
       console.log("foi")
      this.resetForm();
      });
  }

}
