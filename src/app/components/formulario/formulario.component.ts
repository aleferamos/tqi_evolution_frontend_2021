
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClassInput } from 'src/app/shared/interface/IClassInput';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() nomeBtn:string;
  @Input() inputList:IClassInput[] = []
  @Input() listaDadosFormulario: FormGroup;

  email: string;
  constructor() {
  }

  ngOnInit(): void {

  }

  @Input() dispararFuncao(){

  }



}
