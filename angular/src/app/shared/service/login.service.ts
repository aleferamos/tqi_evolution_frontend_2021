import { ICliente } from './../interface/ICliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IToken } from '../interface/IToken';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){}

  async login(user: any): Promise<boolean> {
    const result = await this.http.post(`${environment.urlBase}/login`, user, {responseType: 'text'}).toPromise();

    if (result && result) {
      window.localStorage.setItem('token', result);
      return true;
    }

    return false;
  }

  getAuthorizationToken(): string {
    const token = window.localStorage.getItem('token');

    return token;
  }

  async tokenIsValid(token: IToken): Promise<boolean> {
    const result = await this.http.post<any>(`${environment.urlBase}/autenticacao/validar`, token).toPromise();

    return result;
  }

  async logoff(): Promise<void> {
    window.localStorage.removeItem('token');
  }
}
