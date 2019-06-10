import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCustomerComponent } from './asignar-customer.component';

describe('AsignarCustomerComponent', () => {
  let component: AsignarCustomerComponent;
  let fixture: ComponentFixture<AsignarCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
