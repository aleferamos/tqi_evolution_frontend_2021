import { ILocalStorage } from './../../../shared/interface/ILocalStorage';
import { EmprestimoService } from './../../../shared/service/emprestimo.service';
import { IEmprestimo } from './../../../shared/interface/IEmprestimo';
import { IClassTable } from './../../../shared/interface/IClassTable';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-consultar-todos',
  templateUrl: './consultar-todos.component.html',
  styleUrls: ['./consultar-todos.component.scss']
})
export class ConsultarTodosComponent implements OnInit {
  @Output() colunas: IClassTable [] = [];
  @Output() listaEmprestimos: IEmprestimo[] = [];

  localStorage: ILocalStorage = {} as ILocalStorage;

  constructor(private emprestimoService: EmprestimoService) {

    // this.listaEmprestimos = [
    //   {index: this.i, codigoEmprestimo: 1, valor: '2500', quantidadeParcelas: 60, status: 'EM ANÁLISE'},
    //   {index: this.i, codigoEmprestimo: 1, valor: '2500', quantidadeParcelas: 60, status: 'EM ANÁLISE'},
    // ]

    this.colunas = [
      {label: 'Codigo', labelClass: 'th1', field: 'codigoEmprestimo'},
      {label: 'Valor', labelClass: 'th1', field: 'valor'},
      {label: 'Qtde Parcelas', labelClass: 'th2', field: 'quantidadeParcelas'},
      {label: 'Status', labelClass: 'th3', field: 'status', statusClass: true},
      {label: 'Ver detalhes', labelClass: 'th1', field: '', icon: true, thClass: true}
    ]
  }

  ngOnInit(): void {
    this.obterListaEmprestimos();
  }

  async obterListaEmprestimos(): Promise<void>{
    const result = await this.emprestimoService.getEmprestimos();
    this.listaEmprestimos = result.content
  }



}
