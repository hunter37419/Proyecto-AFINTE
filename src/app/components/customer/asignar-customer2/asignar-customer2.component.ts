import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first} from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-asignar-customer2',
  templateUrl: './asignar-customer2.component.html',
  styleUrls: ['./asignar-customer2.component.css']
})
export class AsignarCustomer2Component implements OnInit {

  customer: Customer;
  cobranza: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {

    const customerId = localStorage.getItem('editCustomerId');

    if ( !customerId ) {
      alert('Acción invalida');
      this.router.navigate(['asignar-customer']);
      return;
    }

    this.cobranza = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      empresa: ['', Validators.required],
 
    });

    this.service.getCustomer(+customerId)
      .subscribe(data => {
        this.cobranza.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCustomer(this.cobranza.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['asignar-customer']);
      },
      error => {
        alert(error);
      });
  }
}
