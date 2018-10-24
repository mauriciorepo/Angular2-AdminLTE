import { ClienteService } from './../cliente.service';
import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clienteboxlist',
  templateUrl: './clienteboxlist.component.html'
})
export class ClienteboxlistComponent implements OnInit {

  cliente:  Cliente;
 @Input() list: Cliente[];
  constructor( private clienteService: ClienteService) { }

  ngOnInit() {
     this.clienteService.getClientes().subscribe((client: Cliente[]) => this.list = client);
  }

}
