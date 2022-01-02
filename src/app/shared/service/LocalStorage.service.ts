import { ICliente } from './../interface/ICliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILocalStorage } from './../interface/ILocalStorage';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  localStorage: ILocalStorage = {} as ILocalStorage;

  email: string;
  constructor(private http: HttpClient){}

  urlBase = environment.urlBase;

    getCliente(){
    var texto =  `{"email": "${this.email}"}`;
    const url = `${this.urlBase}/cliente`;
    var token = this.localStorage.token = localStorage.getItem("token");
    this.http.post<Promise<ICliente>>(url, texto, {headers: this.getAuthorization(token)}).subscribe( item =>{
    this.setLocalStorage('cliente', item)
   });
  }

  getDados(){
    this.localStorage.cliente = JSON.parse(localStorage.getItem('cliente'))
    this.localStorage.token = localStorage.getItem('token')
    this.localStorage.data = localStorage.getItem('data')
    return this.localStorage;
  }

  setLocalStorage(atributo:string, dado: any){
    localStorage.setItem(atributo, this.convertJson(dado));
  }

  convertJson(dado: any){
    return JSON.stringify(dado);
  }

  getAuthorization(token: string){
    let headers_object = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
    });
    return headers_object;
  }
}
