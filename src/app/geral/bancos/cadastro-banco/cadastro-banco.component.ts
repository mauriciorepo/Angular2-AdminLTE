import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Banco } from './../banco.model';
import { BancoService } from './../banco.service';
import { FormBuilder, FormGroup, Validators , FormsModule, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-banco',
  templateUrl: './cadastro-banco.component.html'
})
export class CadastroBancoComponent implements OnInit {
bancoAddForm: FormGroup;
bancoAdd: Banco;
response: string;
   constructor(private fb: FormBuilder, private bancoService: BancoService) { }

  ngOnInit() {
    this.createForm()
  }



  addBanco(){
  //  console.log("Casdatro Banco");
    this.bancoAddForm.get('codbacen');
        if(this.bancoAddForm.valid) {
          this.bancoAdd = this.bancoAddForm.value;
          console.log(this.bancoAdd);
          /* Any API call logic via services goes here */
          this.bancoService.cadastroBanco(this.bancoAdd).subscribe( resp => console.log( resp));
        }


  }

  createForm(){
    this.bancoAddForm = this.fb.group({

      codbacen: [null, [Validators.required , Validators.maxLength(4), Validators.minLength(3)]],
      site:[null],
      nome:[null, [Validators.required , Validators.maxLength(255), Validators.minLength(4)]]

    });
  }
}
