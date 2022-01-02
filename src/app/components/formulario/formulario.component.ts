import { LocalStorageService } from './../../shared/service/LocalStorage.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { ICliente } from './../../shared/interface/ICliente';

import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() nomeBtn:string;
  @Input() inputList:IClassInput[] = []
  @Input() listaDadosFormulario: FormGroup;

  cliente: ICliente = {} as ICliente;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {

  }

  @Input() async dispararFuncao(): Promise<void>{}



}
