import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html'
})
export class DetalheClienteComponent implements OnInit {
Hidden: boolean;
@Input() active: boolean;
sub: any;
id: number;
@Input() cliente: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private router: Router ) { }

  ngOnInit() {
    this.Hidden = true;

    this.sub = this.route.params.subscribe(params => {
       //this.id=parseInt(params['id'],32);
       this.id = params['id'];
       this.clienteService.getClienteById(this.id).subscribe(c => {
        this.cliente = c;
        this.active = this.cliente.ativo;

        console.log(this.cliente);
        } );
     });
  }

  veiculoNavigate() {
    this.router.navigate(['starter', 'cadastroveiculo', this.cliente.id]);

  }
  ClienteEditNavigate() {
    this.router.navigate(['starter', 'editarcliente' , this.cliente.id]);
  }

}
