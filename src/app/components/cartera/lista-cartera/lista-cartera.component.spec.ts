import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarteraComponent } from './lista-cartera.component';

describe('ListaCarteraComponent', () => {
  let component: ListaCarteraComponent;
  let fixture: ComponentFixture<ListaCarteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
