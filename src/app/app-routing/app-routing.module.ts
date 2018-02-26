import { CadastroBancoComponent } from './../geral/bancos/cadastro-banco/cadastro-banco.component';
import { BancoeditComponent } from '../geral/bancos/bancoedit/bancoedit.component';
import { BancolistComponent } from '../geral/bancos/bancolist/bancolist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { ContasComponent } from './../contas/contas.component';
import { FornecedorboxlistComponent } from './../geral/fornecedor/fornecedorboxlist/fornecedorboxlist.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent,
     children: [{path: 'conta', component: ContasComponent},
   // {path: 'listcontas' , component: FornecedorboxlistComponent},
    {path: 'listbancos' , component: BancolistComponent},
    {path: 'cadastromarcas' , component: BancolistComponent},
    {path: 'fornecedor:idfornecedores' , component: BancolistComponent},
    {path: 'bancoedit/:codbacen', component: BancoeditComponent},
    {path: 'cadastrobanco', component: CadastroBancoComponent}]
    },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
