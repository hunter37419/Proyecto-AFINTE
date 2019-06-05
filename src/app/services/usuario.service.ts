import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getCustomers(): Observable<Usuario[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Usuario[])
    );
  }

  getCustomer(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  createCustomer(Usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, Usuario, {headers: this.httpHeaders});
  }

  updateCustomer(Usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl, Usuario, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
