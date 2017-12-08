import { Banco } from '../banco.model';
import { BancoService } from './../banco.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bancolist',
  templateUrl: './bancolist.component.html',
  styleUrls: ['./bancolist.component.css']
})
export class BancolistComponent implements OnInit {
 @Input() list: Banco[];
  constructor(private bancoservice: BancoService ) { }


  ngOnInit() {
    this.bancoservice.listBanco().subscribe(banco => this.list = banco);
  }

}
