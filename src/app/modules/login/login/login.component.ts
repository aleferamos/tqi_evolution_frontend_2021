import { FormBuilder, FormGroup } from '@angular/forms';
import { IClassInput } from './../../../shared/interface/IClassInput';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() nomeBtn:string = "Entrar";
  @Output() listaInputs:IClassInput[] = [];
  @Output() listaDadosFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  @Output() cadastrarUsuario(){
    console.log(this.listaDadosFormulario.value.senha);
  }
}
