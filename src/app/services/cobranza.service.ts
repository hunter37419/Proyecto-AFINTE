import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cobranza } from '../modals/cobranza';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CobranzaService {

  private baseUrl = 'http://localhost:8080/api/cobranza';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Cobranza Funcionando');
  }

  getCobranzas(): Observable<Cobranza[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Cobranza[])
    );
  }

  getCobranza(id: number): Observable<Cobranza> {
    return this.http.get<Cobranza>(`${this.baseUrl}/${id}`);
  }

  createCobranza(Cobranza: Cobranza): Observable<Cobranza> {
    return this.http.post<Cobranza>(this.baseUrl, Cobranza, {headers: this.httpHeaders});
  }

  updateCobranza(Cobranza: Cobranza): Observable<Cobranza> {
    return this.http.put<Cobranza>(this.baseUrl, Cobranza, {headers: this.httpHeaders});
  }

  deleteCobranza(id: number): Observable<Cobranza> {
    return this.http.delete<Cobranza>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }

  //
  findbyRazonSocial(cliente: string){
    return this.http.get(this.baseUrl + "/cliente/" + cliente).pipe(
      map(data => data as Cobranza[])
    );
  }


}
