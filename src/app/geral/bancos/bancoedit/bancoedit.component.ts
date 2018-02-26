import { ActivatedRoute } from '@angular/router';
import { Banco } from './../banco.model';
import { BancoService } from '../banco.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl , NgForm } from '@angular/forms';

@Component({
  selector: 'app-bancoedit',
  templateUrl: './bancoedit.component.html'
})
export class BancoeditComponent implements OnInit {
id: string;
bancoForm: FormGroup;
@Input() bancos: Banco[];
banco: Banco;
sub: any;
errormessage: String = ' ';
response: any;
  constructor(private bancoservice: BancoService , private route: ActivatedRoute , private fb: FormBuilder ) {
   /*this.bancoForm = new FormGroup({
      'codbacen': new FormControl('' , Validators.required),
      'site': new FormControl(''),
      'nome': new FormControl('')
    });*/
  }

    ngOnInit() {
      this.createForm();
      this.sub = this.route.params.subscribe(params => {
        this.id = params['codbacen'];

       this.bancoservice.get(this.id).subscribe((b: Banco) => this.fullUpdate(b[0]));

   //console.log(JSON.stringify(this.banco));
     });

  }



    fullUpdate(b: Banco) {
      //console.log(b.codbacen);

      this.bancoForm.setValue({codbacen: b.codbacen, site: b.site , nome: b.nome});
     }
    createForm(){
this.bancoForm = this.fb.group({

  codbacen: [null, Validators.required],
  site:[null],
  nome:[null, Validators.required]

});

    }
    editBanco() {
        this.bancoForm.get('codbacen');
        if(this.bancoForm.valid) {
          this.banco = this.bancoForm.value;
          console.log(this.banco);
          /* Any API call logic via services goes here */
          this.bancoservice.updateBanco(this.banco).subscribe();
        }


    }
}

