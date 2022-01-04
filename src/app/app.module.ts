import { CadastrarComponent } from './modules/cadastrar/cadastrar/cadastrar.component';
import { ConsultarTodosComponent } from './modules/emprestimo/consultar-todos/consultar-todos.component';
import { LoginComponent } from './modules/login/login/login.component';
import { CoreModule } from './modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabelaComponent } from './components/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    ConsultarTodosComponent,
    TabelaComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
