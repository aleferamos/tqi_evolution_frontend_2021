import { FormGroup, FormBuilder } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';
import { MessageService } from 'primeng/api';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-emprestimo',
  templateUrl: './cadastrar-emprestimo.component.html',
  styleUrls: ['./cadastrar-emprestimo.component.scss'],
  providers: [MessageService]
})
export class CadastrarEmprestimoComponent implements OnInit {
  @Output() nomeBtn:string = "Solicitar Emprestimo";
  @Output() listaInputs:IClassInput[] = [];
  @Output() listaDadosFormulario: FormGroup = {} as FormGroup;
  @Output() btnCadastrar: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.listaInputs = [
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Valor', field: 'valor'},
      {classDiv: 'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Data primeira parcela', field: 'dataPrimeiraParcela'},
      {classDiv: 'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Quantidade de parcelas', field: 'quantidadeParcelas'}
    ]
    this.listaDadosFormulario = this.formBuilder.group({
      valor: [null],
      dataPrimeiraParcela: [null],
      quantidadeParcelas: [null]
    })
  }

  ngOnInit(): void {
  }

  async autenticar(){
  }

  async cadastrar(): Promise<void> {
    setTimeout(function() {
      window.location.href = "/cadastrar"
    }, 700);
  }

}
