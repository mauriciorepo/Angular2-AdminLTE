
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { VeiculoServer } from './../veiculo-server.model';
import { VeiculoService } from './../veiculo.service';


@Component({
  selector: 'app-detalhe-veiculo',
  templateUrl: './detalhe-veiculo.component.html']
})
export class DetalheVeiculoComponent implements OnInit {

  @Input() hidden: boolean;
  @Input() veiculo: VeiculoServer;
  id: number;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private veiculoService: VeiculoService
              ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'],
      this.veiculoService.findVeiculoById(this.id).subscribe(vec => {
        this.veiculo = vec;
      });

    });
  }

  goto(path: string) {
    this.router.navigate(['starter', path]);
  }

}
