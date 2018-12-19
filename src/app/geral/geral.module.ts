import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeralComponent } from './geral.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorboxlistComponent } from './fornecedor/fornecedorboxlist/fornecedorboxlist.component';
import { BancosComponent } from './bancos/bancos.component';
import { BancolistComponent } from './bancos/bancolist/bancolist.component';
import { BancoeditComponent } from './bancos/bancoedit/bancoedit.component';
import { CadastroBancoComponent } from './bancos/cadastro-banco/cadastro-banco.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CadastroServicoComponent } from './servicos/cadastro-servico/cadastro-servico.component';
import { EditarServicoComponent } from './servicos/editar-servico/editar-servico.component';

import { ServicoBoxListComponent } from './servicos/servico-box-list/servico-box-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    //added here too
    ReactiveFormsModule
  ],
  declarations: [GeralComponent,
     FornecedorComponent,
      FornecedorboxlistComponent,
       BancosComponent,
        BancolistComponent,
        BancoeditComponent,
         CadastroBancoComponent,
          ContatosComponent,
           ServicosComponent,
            CadastroServicoComponent,
             EditarServicoComponent,
              ServicoBoxListComponent]
})
export class GeralModule { }
