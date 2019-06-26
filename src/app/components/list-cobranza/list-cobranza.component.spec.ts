import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCobranzaComponent } from './list-cobranza.component';

describe('ListCobranzaComponent', () => {
  let component: ListCobranzaComponent;
  let fixture: ComponentFixture<ListCobranzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCobranzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
