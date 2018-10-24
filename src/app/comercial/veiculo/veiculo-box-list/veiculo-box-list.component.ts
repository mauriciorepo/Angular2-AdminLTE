import { VeiculoServer } from './../veiculo-server.model';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-veiculo-box-list',
  templateUrl: './veiculo-box-list.component.html',
  styleUrls: ['./veiculo-box-list.component.css']
})
export class VeiculoBoxListComponent implements OnInit {
sub: any;
id: number;

@Input() listVeiculo: VeiculoServer[];

  constructor(private vecService: VeiculoService) { }

  ngOnInit() {

    this.vecService.findVeiculos().subscribe(resp => {
     this.listVeiculo = resp;
    });
  }

}
