import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { ConsultarTodosComponent } from './consultar-todos/consultar-todos.component';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo.component';


@NgModule({
  imports: [
    CommonModule,
    EmprestimoRoutingModule
  ],
  declarations: [
  ]
})
export class EmprestimoModule { }
