import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEmprestimoComponent } from './detalhe-emprestimo.component';

describe('DetalheEmprestimoComponent', () => {
  let component: DetalheEmprestimoComponent;
  let fixture: ComponentFixture<DetalheEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
