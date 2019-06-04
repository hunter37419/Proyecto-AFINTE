import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../../modals/Libro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

	private baseurl = 'http://localhost:8080/libro';
	private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  	constructor(private http: HttpClient) {
  		console.log("Servicio Operando");
  	}

  	getLibro(): Observable<Libro[]>{
  		return this.http.get<Libro[]>(this.baseurl);
  	}

}
