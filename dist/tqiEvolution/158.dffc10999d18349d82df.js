"use strict";(self.webpackChunktqi_evolution=self.webpackChunktqi_evolution||[]).push([[158],{158:(z,u,s)=>{s.r(u),s.d(u,{EmprestimoModule:()=>Q});var n=s(8583),l=s(8239),t=s(639),p=s(150),d=s(3590),c=s(6832),f=s(8061);let h=(()=>{class a{constructor(e,o){this.emprestimoService=e,this.route=o,this.emprestimo={}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.detalheEmprestimo()}detalheEmprestimo(){var e=this;return(0,l.Z)(function*(){const o=yield e.emprestimoService.buscarEmprestimo(parseInt(e.id));e.emprestimo=o,e.valorDividorQtdeParcelas=(parseFloat(e.emprestimo.valor)/21*.2+parseFloat(e.emprestimo.valor)/21).toString().substring(0,3),e.valorTotalAPagar=(parseFloat(e.valorDividorQtdeParcelas)*e.emprestimo.quantidadeParcelas).toString()})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.b),t.Y36(d.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-detalhe-emprestimo"]],decls:30,vars:8,consts:[[1,"grid"],[1,"col-5","sm:col-5","md:col-6"],["header","Codigo do empr\xe9stimo"],["header","Valor de emprestimo"],["header","Quantidade de parcelas"],["header","Data da primeira parcela"],["header","Email do solicitante"],["header","Renda do solicitante"],["header","%/M\xeas"],["header","Valor da Parcela ao M\xeas"],["header","Valor Total a pagar"]],template:function(e,o){1&e&&(t._UZ(0,"app-side-bar"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"p-panel",2),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"p-panel",3),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",1),t.TgZ(9,"p-panel",4),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"p-panel",5),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div",1),t.TgZ(15,"p-panel",6),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",1),t.TgZ(19,"p-panel",7),t._uU(20),t.qZA(),t.qZA(),t.TgZ(21,"div",1),t.TgZ(22,"p-panel",8),t._uU(23,"20%"),t.qZA(),t.qZA(),t.TgZ(24,"div",1),t.TgZ(25,"p-panel",9),t._uU(26),t.qZA(),t.qZA(),t.TgZ(27,"div",1),t.TgZ(28,"p-panel",10),t._uU(29),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Oqu(o.emprestimo.codigoEmprestimo),t.xp6(3),t.hij("R$ ",o.emprestimo.valor,""),t.xp6(3),t.Oqu(o.emprestimo.quantidadeParcelas),t.xp6(3),t.Oqu(o.emprestimo.dataPrimeiraParcela),t.xp6(4),t.Oqu(o.emprestimo.email),t.xp6(3),t.hij("R$ ",o.emprestimo.renda,""),t.xp6(6),t.hij("R$ ",o.valorDividorQtdeParcelas,""),t.xp6(3),t.hij("R$ ",o.valorTotalAPagar,""))},directives:[c.P,f.s],styles:['[_nghost-%COMP%]     .p-card{margin-top:0%;margin-left:0%;background:#ffffff;color:#495057;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:3px}h1[_ngcontent-%COMP%]{float:right}  .p-panel{padding-left:5em;font-size:15px;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;margin-top:1em}  .p-panel p{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .p-panel .p-panel-header{border:1px solid #dee2e6;padding:1rem;background:#005fab;color:#fff;border-top-right-radius:3px;border-top-left-radius:3px}']}),a})();var m=s(9783),v=s(6738),C=s(665),b=s(7773),T=s(3627);function Z(a,i){if(1&a&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.TgZ(3,"div",5),t._UZ(4,"i",6),t.qZA(),t.TgZ(5,"div",7),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=i.$implicit;t.xp6(7),t.Oqu(e.detail)}}let _=(()=>{class a{constructor(e,o,r){this.formBuilder=e,this.emprestimoService=o,this.messageService=r,this.nomeBtn="Solicitar Emprestimo",this.listaInputs=[],this.listaDadosFormulario={},this.btnCadastrar=!0,this.inputListDate=[],this.emprestimo={},this.listaInputs=[{classDiv:"form",type:"text",inputClass:"p-inputtext-sm",placeHolder:"Valor",field:"valor"},{classDiv:"form",type:"text",inputClass:"p-inputtext-sm",placeHolder:"Quantidade de parcelas",field:"quantidadeParcelas"}],this.listaDadosFormulario=this.formBuilder.group({valor:[null],dataPrimeiraParcela:[null],quantidadeParcelas:[null]}),this.inputListDate=[{placeHolder:"Data da primeira parcela",field:"dataPrimeiraParcela"}]}ngOnInit(){}autenticar(){return(0,l.Z)(function*(){})()}cadastrar(){var e=this;return(0,l.Z)(function*(){e.emprestimo.valor=e.listaDadosFormulario.value.valor,e.emprestimo.dataPrimeiraParcela=e.listaDadosFormulario.value.dataPrimeiraParcela,e.emprestimo.quantidadeParcelas=e.listaDadosFormulario.value.quantidadeParcelas;var o=new Date;o.setMonth(3);var r=v(o).format("DD/MM/YYYY");yield e.emprestimoService.solicitar(e.emprestimo).then(g=>{e.messageService.add({severity:"error",detail:"Emprestimo solicitado com sucesso, aguarde nosso retorno!"}),setTimeout(function(){window.location.href="/emprestimo"},800)}).catch(g=>{(null===e.emprestimo.valor||null===e.emprestimo.dataPrimeiraParcela||null===e.emprestimo.quantidadeParcelas)&&(console.log("Eentrou"),console.log(e.emprestimo),e.messageService.add({severity:"error",detail:"Alguns campos est\xe3o vazios!"})),e.emprestimo.quantidadeParcelas>60&&e.messageService.add({severity:"error",detail:"Quantidade de parcelas n\xe3o pode ser maior que 60!"}),e.emprestimo.dataPrimeiraParcela>r&&e.messageService.add({severity:"error",detail:"Data do emprestimo tem que ser menor que 3 meses!"})})})()}voltar(){setTimeout(function(){window.location.href="/home"},300)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C.qu),t.Y36(p.b),t.Y36(m.ez))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-cadastrar-emprestimo"]],outputs:{nomeBtn:"nomeBtn",listaInputs:"listaInputs",listaDadosFormulario:"listaDadosFormulario",btnCadastrar:"btnCadastrar",inputListDate:"inputListDate",cadastrar:"cadastrar"},features:[t._Bn([m.ez])],decls:4,vars:8,consts:[["pTemplate","message"],[3,"nomeBtn","nomeCadastrar","inputList","listaDadosFormulario","dispararFuncao","btnCadastrar","cadastrar","inputListDate"],[1,"p-flex","p-flex-column",2,"flex","1"],[1,"p-text-center"],[1,"grid"],[1,"col-2"],[1,"pi","pi-user","icon",2,"font-size","2rem"],[1,"col-8"]],template:function(e,o){1&e&&(t.TgZ(0,"p-toast"),t.YNc(1,Z,8,1,"ng-template",0),t.qZA(),t._UZ(2,"app-side-bar"),t._UZ(3,"app-formulario",1)),2&e&&(t.xp6(3),t.Q6J("nomeBtn",o.nomeBtn)("nomeCadastrar",o.nomeBtn)("inputList",o.listaInputs)("listaDadosFormulario",o.listaDadosFormulario)("dispararFuncao",o.autenticar)("btnCadastrar",o.btnCadastrar)("cadastrar",o.cadastrar)("inputListDate",o.inputListDate))},directives:[b.FN,m.jx,c.P,T.o],styles:['.icon[_ngcontent-%COMP%]{margin-top:.3em}  .p-toast .p-toast-message.p-toast-message-error{background-color:#005fab;color:#fff;border:solid #26b526;border-width:0 0 0 6px;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;font-size:1.1rem}.voltar[_ngcontent-%COMP%]{width:8em;height:2em;position:relative;bottom:16.5em;left:49em;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;font-size:18px;background-color:#0288d1;border:none;color:#fff;cursor:pointer;border-radius:5px}.voltar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:1em;cursor:pointer}']}),a})();var x=s(161);function P(a,i){1&a&&t._uU(0," Emprestimos ")}function E(a,i){if(1&a&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.Q6J("ngClass",e.labelClass),t.xp6(1),t.hij(" ",e.label," ")}}function A(a,i){if(1&a&&(t.TgZ(0,"tr"),t.YNc(1,E,2,2,"th",4),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.labels)}}function q(a,i){if(1&a&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.qZA()),2&a){const e=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(2),t.Oqu(o[e.field])}}function w(a,i){if(1&a&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.qZA()),2&a){const e=t.oxw().$implicit,o=t.oxw().$implicit,r=t.oxw();t.xp6(2),t.Oqu(r.statusClass(o[e.field]))}}function y(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"i",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2).$implicit;return t.oxw().detalhamentoEmprestimo(r.codigoEmprestimo)}),t.qZA()}}const D=function(a){return{detalhes:a}};function M(a,i){if(1&a&&(t.TgZ(0,"td",5),t.YNc(1,q,3,1,"div",6),t.YNc(2,w,3,1,"div",6),t.YNc(3,y,1,0,"i",7),t.qZA()),2&a){const e=i.$implicit;t.Q6J("ngClass",t.VKq(4,D,!0===e.thClass)),t.xp6(1),t.Q6J("ngIf",!e.statusClass),t.xp6(1),t.Q6J("ngIf",e.statusClass),t.xp6(1),t.Q6J("ngIf",e.icon)}}function O(a,i){if(1&a&&(t.TgZ(0,"tr"),t.YNc(1,M,4,6,"td",4),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.colunas)}}const F=function(){return[5,25,50]};let S=(()=>{class a{constructor(){this.labels=[],this.listaRegistros=[],this.colunas=[],this.a=!0}ngOnInit(){this.statusClass()}statusClass(e){switch(e){case"APROVADO":this.cor="green"}return e}detalhamentoEmprestimo(e){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tabela"]],inputs:{labels:"labels",listaRegistros:"listaRegistros",colunas:"colunas",detalhamentoEmprestimo:"detalhamentoEmprestimo"},decls:4,vars:5,consts:[["styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","paginator","rowsPerPageOptions","rows"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[4,"ngIf"],["class","pi pi-window-maximize",3,"click",4,"ngIf"],[1,"pi","pi-window-maximize",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"p-table",0),t.YNc(1,P,1,0,"ng-template",1),t.YNc(2,A,2,1,"ng-template",2),t.YNc(3,O,2,1,"ng-template",3),t.qZA()),2&e&&t.Q6J("value",o.listaRegistros)("paginator",!0)("rowsPerPageOptions",t.DdM(4,F))("rows",5)},directives:[x.iA,m.jx,n.sg,n.mk,n.O5],styles:['.p-datatable .p-datatable-header{background:#26b526;color:#fff;border:1px solid #e9ecef;border-width:1px 0 1px 0;padding:.2em 0 0 .9em;height:2em;font-family:"Lato",sans-serif;font-size:.9rem}  .p-datatable .p-datatable-thead>tr>th{text-align:left;padding:.05em 0 0;height:2em;border:1px solid #e9ecef;border-width:0 0 1px 0;font-weight:600;color:#fff;background:#005fab;transition:box-shadow .2s;font-family:"Lato",sans-serif;font-size:.9rem}  .p-datatable .p-datatable-tbody>tr>td{text-align:center;border:1px solid #e9ecef;border-width:0 0 1px 0;background-color:#cecece;padding:.5rem;color:#464646}.th0[_ngcontent-%COMP%]{width:2em;text-align:center!important}.th1[_ngcontent-%COMP%]{width:5em;text-align:center!important}.th2[_ngcontent-%COMP%]{width:8em;text-align:center!important}.th3[_ngcontent-%COMP%]{width:35em;text-align:center!important}i[_ngcontent-%COMP%]:hover{color:#005fab}i[_ngcontent-%COMP%]{cursor:pointer}']}),a})();const U=[{path:"",component:(()=>{class a{constructor(e){this.emprestimoService=e,this.colunas=[],this.listaEmprestimos=[],this.localStorage={},this.colunas=[{label:"Codigo",labelClass:"th1",field:"codigoEmprestimo"},{label:"Valor",labelClass:"th1",field:"valor"},{label:"Qtde Parcelas",labelClass:"th2",field:"quantidadeParcelas"},{label:"Status",labelClass:"th3",field:"status",statusClass:!0},{label:"Ver detalhes",labelClass:"th1",field:"",icon:!0,thClass:!0}]}ngOnInit(){this.obterListaEmprestimos()}obterListaEmprestimos(){var e=this;return(0,l.Z)(function*(){const o=yield e.emprestimoService.getEmprestimos();e.listaEmprestimos=o.content})()}voltar(e){setTimeout(function(){window.location.href=e},300)}detalhamentoEmprestimo(e){console.log(e),setTimeout(function(){window.location.href=`emprestimo/detalhe/${e}`},300)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.b))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-consultar-todos"]],outputs:{colunas:"colunas",listaEmprestimos:"listaEmprestimos",detalhamentoEmprestimo:"detalhamentoEmprestimo"},decls:2,vars:4,consts:[[3,"labels","listaRegistros","colunas","detalhamentoEmprestimo"]],template:function(e,o){1&e&&(t._UZ(0,"app-side-bar"),t._UZ(1,"app-tabela",0)),2&e&&(t.xp6(1),t.Q6J("labels",o.colunas)("listaRegistros",o.listaEmprestimos)("colunas",o.colunas)("detalhamentoEmprestimo",o.detalhamentoEmprestimo))},directives:[c.P,S],styles:[".p-button[_ngcontent-%COMP%]{margin-right:1em;margin-top:1em;float:right}"]}),a})()},{path:"solicitar",component:_},{path:"detalhe/:id",component:h}];let Y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[d.Bz.forChild(U)],d.Bz]}),a})(),Q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[n.ez,Y]]}),a})()}}]);