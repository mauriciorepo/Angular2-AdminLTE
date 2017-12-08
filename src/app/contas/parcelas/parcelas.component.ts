import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnInit {
 tableData: any = [];
EditRowID: any= '';
parcelas
  constructor() {
    this.tableData = [{id: '1', parcela: '1', conta: 'Banco Brasil', meioPagamento: 'Deposito', vencimento: '10/03/2017', valor: '1234.55'},
    {id: '1', parcela: '1', conta: 'Banco Brasil', meioPagamento: 'Deposito', vencimento: '10/03/2017', valor: '1234.55'},
    {id: '1', parcela: '1', conta: 'Banco Brasil', meioPagamento: 'Deposito', vencimento: '10/03/2017', valor: '1234.55'}];
   }

  ngOnInit() {
  }

  Edit(val) {
    this.EditRowID = val;
  }
}
