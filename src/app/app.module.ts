import { VeiculoService } from './comercial/veiculo/veiculo.service';
//import { Select2Component } from 'angular-select2-component';
import { ClienteService } from './comercial/clientes/cliente.service';
import { AuthInterceptorJson } from './security/auth-interceptor-json';
import { TextMaskModule } from 'angular2-text-mask';
import { FornecedorService } from './geral/fornecedor/fornecedor.service';
import { CadastrofornecedorComponent } from './geral/fornecedor/cadastrofornecedor/cadastrofornecedor.component';
import { AnomodeloService } from './ano-modelo/anomodelo.service';
import { AuthInterceptorBackEnd } from './security/auth-interceptor-back-end';
import { ModeloService } from './modelo/modelo.service';
import { MoedeloService } from './modelo/moedelo.service';

import { CadastroBancoComponent } from './geral/bancos/cadastro-banco/cadastro-banco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BancoeditComponent } from './geral/bancos/bancoedit/bancoedit.component';
import { BancolistComponent } from './geral/bancos/bancolist/bancolist.component';
import { BancoService } from './geral/bancos/banco.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { ContasComponent } from './contas/contas.component';
import { ParcelasComponent } from './contas/parcelas/parcelas.component';
import { FornecedorboxlistComponent } from './geral/fornecedor/fornecedorboxlist/fornecedorboxlist.component';

import { MarcasComponent } from './marcas/marcas.component';
import { CadastroMarcasComponent } from './marcas/cadastro-marcas/cadastro-marcas.component';
import { EditarmarcasComponent } from './marcas/editarmarcas/editarmarcas.component';
import { MarcaboxlistComponent } from './marcas/marcaboxlist/marcaboxlist.component';
import { MarcaService } from './marcas/marca.service';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ModeloComponent } from './modelo/modelo.component';
import { ModeloboxlistComponent } from './modelo/modeloboxlist/modeloboxlist.component';
import { AuthInterceptor } from './security/auth-interceptor';
import { AnoModeloComponent } from './ano-modelo/ano-modelo.component';
import { CadastroAnoModeloComponent } from './ano-modelo/cadastro-ano-modelo/cadastro-ano-modelo.component';
import { AnoModeloBoxlistComponent } from './ano-modelo/ano-modelo-boxlist/ano-modelo-boxlist.component';
import { EditarAnoModeloComponent } from './ano-modelo/editar-ano-modelo/editar-ano-modelo.component';
import { ComercialComponent } from './comercial/comercial.component';
import { EditarfornecedorComponent } from './geral/fornecedor/editarfornecedor/editarfornecedor.component';
import { DatePipe } from '@angular/common';
import { ClientesComponent } from './comercial/clientes/clientes.component';
import { CadastroClienteComponent } from './comercial/clientes/cadastro-cliente/cadastro-cliente.component';
import { ClienteboxlistComponent } from './comercial/clientes/clienteboxlist/clienteboxlist.component';
import { EditarClienteComponent } from './comercial/clientes/editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './comercial/clientes/detalhe-cliente/detalhe-cliente.component';
import { VeiculoComponent } from './comercial/veiculo/veiculo.component';
import { CadastroVeiculoComponent } from './comercial/veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { EditarVeiculoComponent } from './comercial/veiculo/editar-veiculo/editar-veiculo.component';
import { VeiculoBoxListComponent } from './comercial/veiculo/veiculo-box-list/veiculo-box-list.component';
import { DetalheVeiculoComponent } from './comercial/veiculo/detalhe-veiculo/detalhe-veiculo.component';
import { PlanoComponent } from './comercial/plano/plano.component';
import { PlanocoberturaComponent } from './comercial/plano/planocobertura/planocobertura.component';



@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    //Select2Component,

    EditarfornecedorComponent,
    ContasComponent,
    ParcelasComponent,
    FornecedorboxlistComponent,
    BancolistComponent,
    BancoeditComponent,
    MarcasComponent,
    CadastroMarcasComponent,
    EditarmarcasComponent,
    MarcaboxlistComponent,
    CadastroBancoComponent,
    ShowErrorsComponent,
    ModeloComponent,
    ModeloboxlistComponent,
    AnoModeloComponent,
    CadastroAnoModeloComponent,
    AnoModeloBoxlistComponent,
    EditarAnoModeloComponent,
    AnoModeloBoxlistComponent,
    ComercialComponent,
    CadastrofornecedorComponent,
    EditarfornecedorComponent,
    ClientesComponent,
    CadastroClienteComponent,
    ClienteboxlistComponent,
    EditarClienteComponent,
    FornecedorboxlistComponent,
    DetalheClienteComponent,
    VeiculoComponent,
    CadastroVeiculoComponent,
    EditarVeiculoComponent,
    VeiculoBoxListComponent,
    DetalheVeiculoComponent,
    PlanoComponent,
    PlanocoberturaComponent


      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [

     BancoService,
     MarcaService,
     ModeloService,
     AnomodeloService,
     FornecedorService,
     ClienteService,
     VeiculoService,
     DatePipe,

   {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorBackEnd, multi: true},
   {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorJson, multi: true},
     {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true }

  // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
