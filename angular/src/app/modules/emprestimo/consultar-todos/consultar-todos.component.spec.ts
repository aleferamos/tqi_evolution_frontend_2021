import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTodosComponent } from './consultar-todos.component';

describe('ConsultarTodosComponent', () => {
  let component: ConsultarTodosComponent;
  let fixture: ComponentFixture<ConsultarTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
