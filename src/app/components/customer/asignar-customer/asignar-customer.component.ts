import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-asignar-customer',
  templateUrl: './asignar-customer.component.html',
  styleUrls: ['./asignar-customer.component.css']
})
export class AsignarCustomerComponent implements OnInit {

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
    this.router.navigate(['asignar-customer2']);
  }

}
