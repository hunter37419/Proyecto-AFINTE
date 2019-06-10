import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCobranzaCierreComponent } from './lista-cobranza-cierre.component';

describe('ListaCobranzaCierreComponent', () => {
  let component: ListaCobranzaCierreComponent;
  let fixture: ComponentFixture<ListaCobranzaCierreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCobranzaCierreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCobranzaCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
