import { FormGroup, FormBuilder } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';
import { MessageService } from 'primeng/api';
import { Component, OnInit, Output, Input } from '@angular/core';

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
  @Output() btnCadastrar: boolean;
  @Output() btnEntrar: boolean;
  @Output() btnProximo: boolean = true;
  @Output() btnCadastrarTudo: boolean = true;
  @Input() index: number = 0;

  constructor(private formBuilder: FormBuilder) {
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

  }

  ngOnInit(): void {
  }

  @Output() async cadastrar():Promise<void>{

  }

  @Input() async proximo(): Promise<void> {
    this.index = 1;
  }
}
