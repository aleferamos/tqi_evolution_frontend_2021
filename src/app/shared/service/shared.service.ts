import { ICliente } from './../interface/ICliente';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SharedService {

public static instance : SharedService = null;
cliente:ICliente;
token: string;
showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance === null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean {
    if(this.cliente === null){
      return false;
    }
    return this.cliente.email != '';
  }
}
