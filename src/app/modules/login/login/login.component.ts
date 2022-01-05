import { IToken } from './../../../shared/interface/IToken';
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
  @Output() btnCadastrar: boolean = true;
  @Output() btnEntrar: boolean = true;
  @Output() nomeCadastrar:string = "Cadastrar";

  cliente: ICliente = {} as ICliente;
  localStorage: ILocalStorage = {} as ILocalStorage;
  token: IToken;

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
    const token = {
      token: window.localStorage.getItem('token')
    };

    this.loginService.tokenIsValid(token).then( data => {
       if(data){
        window.location.href = '/home'
      }
    })

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
        }, 800);

      }).catch(err => {
        this.messageService.add({severity: 'error',
        detail: "Login ou senha inválidos!"});
      })


  }

  async cadastrar(): Promise<void> {
    setTimeout(function() {
      window.location.href = "/cadastrar"
    }, 700);
  }
}
