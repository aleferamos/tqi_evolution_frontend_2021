import { ICliente } from './../../../shared/interface/ICliente';
import { ILocalStorage } from './../../../shared/interface/ILocalStorage';
import { LocalStorageService } from './../../../shared/service/LocalStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {
    this.localStorage = this.localStorageService.getDados()
  }

  localStorage: ILocalStorage = {} as ILocalStorage;
  cliente: ICliente = {} as ICliente;

  ngOnInit(): void {}

}
