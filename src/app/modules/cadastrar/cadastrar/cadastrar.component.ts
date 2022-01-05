import { IMenuItem } from './../../../shared/interface/IMenuItem';
import { ICadastrarUsuario } from './../../../shared/interface/ICadastrarUsuario';
import { CadastroUsuarioService } from './../../../shared/service/CadastroUsuario.service';
import { IEndereco } from './../../../shared/interface/IEndereco';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';
import { MessageService } from 'primeng/api';
import { Component, OnInit, Output, Input } from '@angular/core';
import { IUsuario } from 'src/app/shared/interface/IUsuario';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  providers: [MessageService]
})
export class CadastrarComponent implements OnInit {
  @Output() nomeBtn:string = "Entrar";
  @Output() listaInputs:IClassInput[] = [];
  @Output() inputListEndereco:IClassInput[] = []
  @Output() listaDadosFormulario: FormGroup = {} as FormGroup;
  @Input() listaDadosFormularioEndereco: FormGroup;
  @Output() btnCadastrar: boolean = true;
  @Output() btnEntrar: boolean;
  @Output() btnProximo: boolean = true;
  @Output() btnCadastrarTudo: boolean = true;
  @Input() index: number = 0;

  usuario: IUsuario = {} as IUsuario;
  endereco: IEndereco = {} as IEndereco;
  cadastrarUsuario: ICadastrarUsuario = {} as ICadastrarUsuario;
  items: IMenuItem [] = []
  constructor(
    private formBuilder: FormBuilder,
    private cadastrarUsuarioService: CadastroUsuarioService,
    private messageService: MessageService) {
    this.listaInputs = [
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Nome', field: 'nome'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Email', field: 'email'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Cpf', field: 'cpf'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Rg', field: 'rg'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Renda', field: 'renda'},
      {classDiv: 'form', type: 'password', inputClass: 'p-inputtext-sm', placeHolder:'Senha', field: 'senha'}
    ]
    this.inputListEndereco = [
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Apelido', field: 'apelido'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Rua', field: 'rua'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Número', field: 'numero'},
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Cep', field: 'cep'},
    ]
    this.listaDadosFormulario = this.formBuilder.group({
      nome: [null],
      email: [null],
      cpf: [null],
      rg: [null],
      renda: [null],
      senha: [null],
    })

    this.listaDadosFormularioEndereco = this.formBuilder.group({
      apelido: [null],
      rua: [null],
      numero: [null],
      cep: [null],
    })

    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
  ];

  }

  ngOnInit(): void {
  }

  @Output() async cadastrar():Promise<void>{
    this.usuario.nome = this.listaDadosFormulario.value.nome
    this.usuario.email = this.listaDadosFormulario.value.email
    this.usuario.cpf = this.listaDadosFormulario.value.cpf
    this.usuario.rg = this.listaDadosFormulario.value.rg
    this.usuario.renda = this.listaDadosFormulario.value.renda
    this.usuario.senha = this.listaDadosFormulario.value.senha

    this.endereco.apelido = this.listaDadosFormularioEndereco.value.apelido
    this.endereco.rua = this.listaDadosFormularioEndereco.value.rua
    this.endereco.numero = this.listaDadosFormularioEndereco.value.numero
    this.endereco.cep = this.listaDadosFormularioEndereco.value.cep

    this.cadastrarUsuario.cliente = this.usuario;
    this.cadastrarUsuario.endereco = this.endereco;
    console.log(this.cadastrarUsuario);

    await this.cadastrarUsuarioService.cadastrar(this.cadastrarUsuario).then(err => {
      this.messageService.add({severity: 'error',
      detail: "Usuario cadastrado com sucesso" });
      setTimeout(function() {
        window.location.href = "/login"
      }, 1100);

    }).catch(err => {
      this.messageService.add({severity: 'error',
      detail: "Campos vazios estão vazios ou email já consta no sistema"});
    })

  }

  @Input() async proximo(): Promise<void> {
    this.index = 1;
  }

  voltar(){
    setTimeout(function() {
      window.location.href = "/home"
    }, 300);
  }
}
