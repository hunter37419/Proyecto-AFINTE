import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CobranzaCierre } from '../modals/cobranza-cierre';

@Injectable({
  providedIn: 'root'
})
export class CobranzaCierreService {

  private baseUrl = 'http://localhost:8080/api/cobcierres';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Cobranza Funcionando');
  }

  getCustomers(): Observable<CobranzaCierre[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as CobranzaCierre[])
    );
  }

  getCustomer(id: number): Observable<CobranzaCierre> {
    return this.http.get<CobranzaCierre>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: CobranzaCierre): Observable<CobranzaCierre> {
    return this.http.post<CobranzaCierre>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: CobranzaCierre): Observable<CobranzaCierre> {
    return this.http.put<CobranzaCierre>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<CobranzaCierre> {
    return this.http.delete<CobranzaCierre>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
