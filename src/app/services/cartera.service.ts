import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cartera } from '../modals/Cartera';

@Injectable({
  providedIn: 'root'
})
export class CarteraService {

  private baseUrl = 'http://localhost:8080/api/carteras';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Cartera Funcionando');
  }

  getCustomers(): Observable<Cartera[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Cartera[])
    );
  }

  getCustomer(id: number): Observable<Cartera> {
    return this.http.get<Cartera>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Cartera): Observable<Cartera> {
    return this.http.post<Cartera>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: Cartera): Observable<Cartera> {
    return this.http.put<Cartera>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Cartera> {
    return this.http.delete<Cartera>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }

  buscarxRuc(ruc: string): Observable<Cartera[]>{
    console.log("works1");
    return this.http.get(this.baseUrl + '/ruc/' + ruc).pipe(
        map(data => data as Cartera[])
      );
  }

  buscarxRuc2(ruc: string): Observable<Cartera[]>{
    console.log("works2");
    return this.http.get<Cartera[]>(this.baseUrl + '/ruc/' + ruc);
  }

}
