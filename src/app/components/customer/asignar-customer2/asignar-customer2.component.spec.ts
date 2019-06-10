import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCustomer2Component } from './asignar-customer2.component';

describe('AsignarCustomer2Component', () => {
  let component: AsignarCustomer2Component;
  let fixture: ComponentFixture<AsignarCustomer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarCustomer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCustomer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
