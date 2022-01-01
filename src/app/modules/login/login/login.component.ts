import { Router } from '@angular/router';
import { ICliente } from './../../../shared/interface/ICliente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IClassInput } from './../../../shared/interface/IClassInput';
import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login.service';
import { MessageService } from 'primeng/api';

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

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService) {
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
  }


  async autenticar(){
    this.cliente.email = this.listaDadosFormulario.value.email
    this.cliente.senha = this.listaDadosFormulario.value.senha

      await this.loginService.login(this.cliente).then(sucesso => {
        setTimeout(function() {
          window.location.href = "/home"
        }, 1100);
      }).catch(err => {

        this.messageService.add({severity: 'error',
        detail: "Login ou senha incorretos!"});
      })
  }

  @Output() cadastrarUsuario(){}
}
