import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: []
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private router: Router, private service: CustomerService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.customers = data));
  }

  deleteCustomer(customer: Customer): void {
        this.service.deleteCustomer(customer.id).subscribe(data => {
          this.customers = this.customers.filter(c => c !== customer);
        });
  }

  editCustomer(customer: Customer): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', customer.id.toString());
    this.router.navigate(['edit-customer']);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }
}
