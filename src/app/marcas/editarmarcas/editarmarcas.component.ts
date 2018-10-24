import { Marca } from './../marca.model';
import { ActivatedRoute,  Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { MarcaService } from './../marca.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CustomValidators } from '../../show-errors/CustomValidators';

@Component({
  selector: 'app-editarmarcas',
  templateUrl: './editarmarcas.component.html'
})
export class EditarmarcasComponent implements OnInit {
marcaEditForm: FormGroup;
id: number;
sub: any;
marca: Marca;
@Input() Hidden: boolean;

  constructor(private marcaService: MarcaService, private fb: FormBuilder, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.Hidden = true;
    this.createForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

     this.marcaService.getMarcaEdit(this.id).subscribe((m: Marca) => this.fullUpdate(m));
  });
}

  fullUpdate(m: Marca) {
    console.log(m.nome);

    this.marcaEditForm.setValue({nome: m.nome, codigo: m.codigo , id: m.id, version: m.version});
   }

  createForm() {
    this.marcaEditForm = this.fb.group({

      nome: new FormControl(null, [Validators.required ]),
      id: new FormControl(null, [Validators.required]),
      codigo: [null, [Validators.required ]],
      version: [null, Validators.required]

    });
  }
  editMarca() {
    if (this.marcaEditForm.valid) {
      this.marca = this.marcaEditForm.value;
      console.log(this.marca);
      /* Any API call logic via services goes here */
    return this.marcaService.marcaUpdate(this.marca).subscribe();
    }

  }

  gotoList() {

    this.router.navigate(['starter' , 'listmarcas']);
  }
}

