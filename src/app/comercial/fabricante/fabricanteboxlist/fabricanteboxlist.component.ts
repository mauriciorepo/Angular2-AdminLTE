import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../fabricante.service';
import { Fabricante } from '../fabricante.model';

@Component({
  selector: 'app-fabricanteboxlist',
  templateUrl: './fabricanteboxlist.component.html',
  styleUrls: ['./fabricanteboxlist.component.css']
})
export class FabricanteboxlistComponent implements OnInit {

  fabricantelist: Fabricante[];
  constructor(private fabricanteService: FabricanteService) { }

  ngOnInit() {
    this.fabricanteService.getFabricante().subscribe(list=>{
      this.fabricantelist=list;
    })
  }

}
