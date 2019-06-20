import { EditarVeiculoComponent } from './../comercial/veiculo/editar-veiculo/editar-veiculo.component';
import { VeiculoBoxListComponent } from './../comercial/veiculo/veiculo-box-list/veiculo-box-list.component';
import { CadastroVeiculoComponent } from './../comercial/veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { DetalheClienteComponent } from './../comercial/clientes/detalhe-cliente/detalhe-cliente.component';
import { CadastroClienteComponent } from './../comercial/clientes/cadastro-cliente/cadastro-cliente.component';
import { EditarClienteComponent } from './../comercial/clientes/editar-cliente/editar-cliente.component';
import { ClienteboxlistComponent } from './../comercial/clientes/clienteboxlist/clienteboxlist.component';
import { EditarfornecedorComponent } from './../geral/fornecedor/editarfornecedor/editarfornecedor.component';
import { CadastrofornecedorComponent } from './../geral/fornecedor/cadastrofornecedor/cadastrofornecedor.component';
import { AnoModeloBoxlistComponent } from './../ano-modelo/ano-modelo-boxlist/ano-modelo-boxlist.component';
import { ModeloboxlistComponent } from './../modelo/modeloboxlist/modeloboxlist.component';
import { EditarmarcasComponent } from './../marcas/editarmarcas/editarmarcas.component';
import { MarcaboxlistComponent } from './../marcas/marcaboxlist/marcaboxlist.component';
import { CadastroBancoComponent } from './../geral/bancos/cadastro-banco/cadastro-banco.component';
import { BancoeditComponent } from '../geral/bancos/bancoedit/bancoedit.component';
import { BancolistComponent } from '../geral/bancos/bancolist/bancolist.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { ContasComponent } from './../contas/contas.component';
import { FornecedorboxlistComponent } from './../geral/fornecedor/fornecedorboxlist/fornecedorboxlist.component';
import { CadastroMarcasComponent } from '../marcas/cadastro-marcas/cadastro-marcas.component';
import { CadastroModeloComponent } from '../modelo/cadastro-modelo/cadastro-modelo.component';
import { CadastroProdutoComponent } from '../comercial/produtos/cadastro-produto/cadastro-produto.component';
import { CadastrogrupoComponent } from '../comercial/grupos/cadastrogrupo/cadastrogrupo.component';
import { GrupoboxlistComponent } from '../comercial/grupos/grupoboxlist/grupoboxlist.component';
import { EditargrupoComponent } from '../comercial/grupos/editargrupo/editargrupo.component';
import { CadastrofabricanteComponent } from '../comercial/fabricante/cadastrofabricante/cadastrofabricante.component';
import { FabricanteboxlistComponent } from '../comercial/fabricante/fabricanteboxlist/fabricanteboxlist.component';
import { EditarfabricanteComponent } from '../comercial/fabricante/editarfabricante/editarfabricante.component';
import { CadastrounidadesComponent } from '../geral/unidades/cadastrounidades/cadastrounidades.component';
import { UnidadesboxlistComponent } from '../geral/unidades/unidadesboxlist/unidadesboxlist.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent,
     children: [{path: 'conta', component: ContasComponent},
    {path: 'listmarcas' , component: MarcaboxlistComponent},
    {path: 'listbancos' , component: BancolistComponent},
    {path: 'cadastromarcas' , component: CadastroMarcasComponent},
    {path: 'fornecedor:idfornecedores' , component: BancolistComponent},
    {path: 'bancoedit/:codbacen', component: BancoeditComponent},
    {path: 'marcaedit/:id', component: EditarmarcasComponent},
    {path: 'listmodelo', component: ModeloboxlistComponent},
    {path: 'listanomodelo/:id', component: AnoModeloBoxlistComponent},
    {path: 'cadastrobanco', component: CadastroBancoComponent},
    {path: 'cadastrofornecedor', component: CadastrofornecedorComponent},
    {path: 'fornecedoredit/:id', component: EditarfornecedorComponent},
    {path: 'listfornecedor' , component: FornecedorboxlistComponent},
    {path: 'cadastrocliente' , component: CadastroClienteComponent},
    {path: 'listcliente' , component: ClienteboxlistComponent},
    {path: 'editarcliente/:id', component: EditarClienteComponent},
    {path: 'detalhecliente/:id' , component: DetalheClienteComponent},
    {path: 'cadastroveiculo/:id', component: CadastroVeiculoComponent},
    {path: 'listveiculos', component: VeiculoBoxListComponent},
    {path: 'editarveiculo/:id' , component: EditarVeiculoComponent},
    {path: 'editarveiculo/:id/:clienteid' , component: EditarVeiculoComponent},
    {path:'cadastromodelo', component: CadastroModeloComponent},
    {path: 'cadastroprodutos', component: CadastroProdutoComponent},
    {path:'cadastrogrupo', component:CadastrogrupoComponent},
    {path: 'grupolist', component:GrupoboxlistComponent},
    {path: 'editargrupo/:id', component:EditargrupoComponent},
    {path:'cadastrofabricante', component: CadastrofabricanteComponent},
    {path:'fabricantelist', component:FabricanteboxlistComponent},
    {path: 'editarfabricante/:id', component:EditarfabricanteComponent},
    {path: 'cadastrounidade', component:CadastrounidadesComponent},
    {path: 'unidadelist', component:UnidadesboxlistComponent}

  ]
    },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule {

private newMethod(): string {
  return ' cadastrocliente';
}
}
