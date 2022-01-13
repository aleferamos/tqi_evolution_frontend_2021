import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo.component';

describe('CadastrarEmprestimoComponent', () => {
  let component: CadastrarEmprestimoComponent;
  let fixture: ComponentFixture<CadastrarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
