import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo.component';
import { ConsultarTodosComponent } from './consultar-todos/consultar-todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConsultarTodosComponent },
  { path: 'solicitar', component: CadastrarEmprestimoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRoutingModule { }
