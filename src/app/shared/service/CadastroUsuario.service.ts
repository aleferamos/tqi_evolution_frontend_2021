import { ICadastrarUsuario } from './../interface/ICadastrarUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './LocalStorage.service';
import { ILocalStorage } from '../interface/ILocalStorage';
@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService){}

  localStorage: ILocalStorage = this.localStorageService.getDados()
  urlBase = environment.urlBase;

  async cadastrar(cadastroUsuario: ICadastrarUsuario): Promise<void>{
    const url = `${this.urlBase}/cadastro-cliente`
    await this.http.post(url, cadastroUsuario).toPromise()
  }
}
