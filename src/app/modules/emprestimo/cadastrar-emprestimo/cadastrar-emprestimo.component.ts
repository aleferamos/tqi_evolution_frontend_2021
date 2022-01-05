import { IEmprestimo } from './../../../shared/interface/IEmprestimo';
import { EmprestimoService } from './../../../shared/service/emprestimo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';
import { MessageService } from 'primeng/api';
import { Component, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

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
  @Output() inputListDate: IClassInput [] = []
  emprestimo: IEmprestimo = {} as IEmprestimo;

  constructor(
    private formBuilder: FormBuilder,
    private emprestimoService: EmprestimoService,
    private messageService: MessageService
  ) {
    this.listaInputs = [
      {classDiv:'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Valor', field: 'valor'},
      {classDiv: 'form', type: 'text', inputClass: 'p-inputtext-sm', placeHolder:'Quantidade de parcelas', field: 'quantidadeParcelas'}
    ]
    this.listaDadosFormulario = this.formBuilder.group({
      valor: [null],
      dataPrimeiraParcela: [null],
      quantidadeParcelas: [null]
    })

    this.inputListDate = [
      {placeHolder:'Data da primeira parcela', field: 'dataPrimeiraParcela'},
    ]

  }

  ngOnInit(): void {
  }

  async autenticar(){
  }

  async cadastrar(): Promise<void> {
    console.log(this.emprestimo);

    this.emprestimo.valor = this.listaDadosFormulario.value.valor;
    this.emprestimo.dataPrimeiraParcela = this.listaDadosFormulario.value.dataPrimeiraParcela;
    this.emprestimo.quantidadeParcelas = this.listaDadosFormulario.value.quantidadeParcelas;


    var currentDate = new Date();
    currentDate.setMonth(3);
    var dataConvert = moment(currentDate).format('DD/MM/YYYY')

    await this.emprestimoService.solicitar(this.emprestimo).then(err => {
      this.messageService.add({severity: 'error',
      detail: "Emprestimo solicitado com sucesso, aguarde nosso retorno!"});
      setTimeout(function() {
        window.location.href = "/emprestimo"
      }, 800);

    }).catch(err => {
      if(this.emprestimo.quantidadeParcelas > 60){
        this.messageService.add({severity:'error', detail:'Quantidade de parcelas não pode ser maior que 60!'});
      }
      if(this.emprestimo.dataPrimeiraParcela > dataConvert){
        this.messageService.add({severity:'error', detail:'Data do emprestimo tem que ser menor que 3 meses!'});
      }

    })
  }

  ToastData() {

  }

}
