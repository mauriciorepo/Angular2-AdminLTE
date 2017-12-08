import { ActivatedRoute } from '@angular/router';
import { Banco } from './../banco.model';
import { BancoService } from '../banco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bancoedit',
  templateUrl: './bancoedit.component.html',
  styleUrls: ['./bancoedit.component.css']
})
export class BancoeditComponent implements OnInit {

  constructor(private bancoservice: BancoService , private route: ActivatedRoute ) { }
banco: Banco;
sub: any;
errormessage: string = '';
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['codbacen']);
      this.bancoservice.get(id).subscribe(b => this.banco = b);

    });
  }

  editBanco() {

  }
}
