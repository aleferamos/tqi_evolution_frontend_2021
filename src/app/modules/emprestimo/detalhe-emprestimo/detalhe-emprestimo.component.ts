import { ActivatedRoute } from '@angular/router';
import { IEmprestimo } from './../../../shared/interface/IEmprestimo';
import { EmprestimoService } from './../../../shared/service/emprestimo.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhe-emprestimo',
  templateUrl: './detalhe-emprestimo.component.html',
  styleUrls: ['./detalhe-emprestimo.component.scss']
})
export class DetalheEmprestimoComponent implements OnInit {

  constructor(
    private emprestimoService: EmprestimoService,
    private route: ActivatedRoute) { }

  id: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.detalheEmprestimo();
  }

  emprestimo: IEmprestimo = {} as IEmprestimo;
  @Output() ngClass = 'menu'

  async detalheEmprestimo(): Promise<void> {
    const result = await this.emprestimoService.buscarEmprestimo(parseInt(this.id));
    this.emprestimo = result;
    console.log(this.emprestimo);
  }



}
