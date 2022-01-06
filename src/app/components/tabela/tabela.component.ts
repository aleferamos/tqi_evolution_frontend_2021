import { IEmprestimo } from './../../shared/interface/IEmprestimo';
import { IClassTable } from './../../shared/interface/IClassTable';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() labels: IClassTable [] = [];
  @Input() listaRegistros: IEmprestimo[] = [];
  @Input() colunas: IClassTable [] = [];
  a:boolean = true;
  cor;
  constructor() {}
  ngOnInit(): void {
    this.statusClass();
  }

  statusClass(event?){
    switch (event) {
      case 'APROVADO':
        this.cor = 'green'
      break;

      default:
        break;
    }

    return event
  }

  @Input() detalhamentoEmprestimo(idEmprestimo: number){}
}
