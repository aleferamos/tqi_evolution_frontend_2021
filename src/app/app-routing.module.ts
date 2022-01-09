import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'cadastrar', loadChildren: () => import('./modules/cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
  { path: 'home', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  { path: 'emprestimo', loadChildren: () => import('./modules/emprestimo/emprestimo.module').then(m => m.EmprestimoModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
