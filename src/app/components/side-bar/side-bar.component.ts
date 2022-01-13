import { LoginService } from './../../shared/service/login.service';
import { LocalStorageService } from './../../shared/service/LocalStorage.service';
import { ILocalStorage } from './../../shared/interface/ILocalStorage';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService
  ) {
    this.localStorage = this.localStorageService.getDados()
  }

  ngOnInit(): void {
    this.nome = this.localStorage.cliente.nome.split(' ')[0]
    this.data = this.localStorage.data
  }

  localStorage: ILocalStorage = {} as ILocalStorage;
  visibleSidebar1 = false;
  nome: string;
  data: string;
  @Input() ngClass = 'menu'

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
