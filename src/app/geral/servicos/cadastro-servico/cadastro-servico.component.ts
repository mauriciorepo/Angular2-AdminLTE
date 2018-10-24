import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html'
})
export class CadastroServicoComponent implements OnInit {
servicoForm: FormGroup;
  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
  }

}
