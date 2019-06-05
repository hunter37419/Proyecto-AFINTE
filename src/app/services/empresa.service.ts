import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Empresa } from '../model/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = 'http://localhost:8080/api/empresa';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Empresa[])
    );
  }

  getEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`);
  }

  createEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa, {headers: this.httpHeaders});
  }

  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.baseUrl, empresa, {headers: this.httpHeaders});
  }

  deleteEmpresa(id: number): Observable<Empresa> {
    return this.http.delete<Empresa>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}