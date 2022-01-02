import { ILocalStorage } from './../../../shared/interface/ILocalStorage';
import { LocalStorageService } from './../../../shared/service/LocalStorage.service';
import { ICliente } from './../../../shared/interface/ICliente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IClassInput } from './../../../shared/interface/IClassInput';
import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login.service';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, MessageService]
})

export class LoginComponent implements OnInit {

  @Output() nomeBtn:string = "Entrar";
  @Output() listaInputs:IClassInput[] = [];
  @Output() listaDadosFormulario: FormGroup = {} as FormGroup;

  cliente: ICliente = {} as ICliente;
  localStorage: ILocalStorage = {} as ILocalStorage;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService) {

      this.localStorage = this.localStorageService.getDados()

    this.listaInputs = [
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Email', field: 'email'},
      {classDiv: 'form', type: 'password', inputClass: 'p-inputtext-sm', placeHolder:'Senha', field: 'senha'}
    ]
    this.listaDadosFormulario = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

  ngOnInit(): void {
    if(this.localStorage.token){
      setTimeout(function() {
        window.location.href = "/home"
      }, 0);
    }
  }


  async autenticar(){
    this.cliente.email = this.listaDadosFormulario.value.email
    this.cliente.senha = this.listaDadosFormulario.value.senha
    LocalStorageService.prototype.email = this.cliente.email;

      await this.loginService.login(this.cliente).then(sucesso => {
        this.localStorageService.getCliente();
        const data = new Date();
        LocalStorageService.prototype.setLocalStorage('data', (moment(data)).format('DD-MM-YYYY'))
        setTimeout(function() {
          window.location.href = "/home"
        }, 1100);

      }).catch(err => {
        this.messageService.add({severity: 'error',
        detail: "Login ou senha incorretos!"});
      })


  }
}
