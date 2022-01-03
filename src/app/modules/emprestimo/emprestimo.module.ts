import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { ConsultarTodosComponent } from './consultar-todos/consultar-todos.component';


@NgModule({
  imports: [
    CommonModule,
    EmprestimoRoutingModule
  ]
})
export class EmprestimoModule { }
