import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarcaService } from './../marca.service';
import { Component, OnInit, } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { Marca } from '../marca.model';
@Component({
  selector: 'app-cadastro-marcas',
  templateUrl: './cadastro-marcas.component.html'
})

export class CadastroMarcasComponent implements OnInit {
marcaForm: FormGroup;
marcaAdd: Marca;
  constructor( private marcaService: MarcaService, private fb: FormBuilder ) { }

  ngOnInit() {
   this.createForm();
  }
  addMarca() {
    //  console.log("Casdatro Banco");
      this.marcaForm.get('nome');
          if (this.marcaForm.valid) {
            this.marcaAdd = this.marcaForm.value;
            console.log(this.marcaAdd);
            /* Any API call logic via services goes here */
            this.marcaService.cadastroMarca(this.marcaAdd).subscribe( resp => console.log( resp));
          }


    }
    createForm() {
      this.marcaForm = this.fb.group({

        codigo: [null, [Validators.required , Validators.maxLength(5), Validators.minLength(1)]],

        nome: [null, [Validators.required , Validators.maxLength(255), Validators.minLength(1)]]

      });
    }
}
