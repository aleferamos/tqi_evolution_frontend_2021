import { LocalStorageService } from './LocalStorage.service';
import { ILocalStorage } from './../interface/ILocalStorage';
import { IPage } from './../interface/IPage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmprestimo } from '../interface/IEmprestimo';
@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService){}

  localStorage: ILocalStorage = this.localStorageService.getDados()

  urlBase = environment.urlBase;

  async getEmprestimos(): Promise<IPage<IEmprestimo>> {
    const url = `${this.urlBase}/emprestimo/todos`
    return await this.http.get<IPage<IEmprestimo>>(url,
      {headers: LocalStorageService.prototype.getAuthorization(this.localStorage.token)}).toPromise();
  }

  async buscarEmprestimo(idEmprestimo: number): Promise<IEmprestimo> {
    const url = `${this.urlBase}/emprestimo/detalhe/${idEmprestimo}`
    return await this.http.get(url, {headers: LocalStorageService.prototype.getAuthorization(this.localStorage.token)}).toPromise();
  }

  async solicitar(emprestimo: IEmprestimo): Promise<void> {
    const url = `${this.urlBase}/emprestimo/novo`
    await this.http.post(url, emprestimo,
      {headers: LocalStorageService.prototype.getAuthorization(this.localStorage.token)}).toPromise();
  }
}
