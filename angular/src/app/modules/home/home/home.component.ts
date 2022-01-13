import { Router } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType} from 'primeng/api';
import { LoginService } from 'src/app/shared/service/login.service';
import { ICliente } from './../../../shared/interface/ICliente';
import { ILocalStorage } from './../../../shared/interface/ILocalStorage';
import { LocalStorageService } from './../../../shared/service/LocalStorage.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class HomeComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router) {
    this.localStorage = this.localStorageService.getDados()
  }

  localStorage: ILocalStorage = {} as ILocalStorage;
  cliente: ICliente = {} as ICliente;
  nome: string;
  data: string;
  visibleSidebar1 = false;
  responsiveOptions;
  display: boolean = false;
  email: string = '';

  ngOnInit(): void {
    this.nome = this.localStorage.cliente.nome.split(' ')[0]
    this.data = moment(this.localStorage.data).format('MM/DD/YYYY')
  }

  redirecionar(url: string){
    setTimeout(() => {
      this.router.navigate([url]);
    }, 300);
  }

  sair(){
    this.loginService.logoff();
    setTimeout(function() {
      location.reload()
    }, 300);
  }

    showDialog() {
        this.display = true;
    }

    HideDialog() {


      if(this.email === ''){
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Você não digitou o email para indicação!'});
      } else {
        this.display = false;
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Amigo indicado com sucesso!'});
      }


  }
}
