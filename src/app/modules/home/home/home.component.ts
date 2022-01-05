import { LoginService } from 'src/app/shared/service/login.service';
import { ICliente } from './../../../shared/interface/ICliente';
import { ILocalStorage } from './../../../shared/interface/ILocalStorage';
import { LocalStorageService } from './../../../shared/service/LocalStorage.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService) {
    this.localStorage = this.localStorageService.getDados()
  }

  localStorage: ILocalStorage = {} as ILocalStorage;
  cliente: ICliente = {} as ICliente;
  nome: string;
  data: string;
  visibleSidebar1 = false;

  ngOnInit(): void {
    this.nome = this.localStorage.cliente.nome.split(' ')[0]
    this.data = moment(this.localStorage.data).format('MM/DD/YYYY')

    console.log(this.nome);

  }

  redirecionar(url: string){
    setTimeout(function() {
      window.location.href = url
    }, 300);
  }

  sair(){
    this.loginService.logoff();
    setTimeout(function() {
      location.reload()
    }, 300);
  }

}
