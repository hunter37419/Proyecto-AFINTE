import { Injectable } from '@angular/core';
import { Gerente } from '../../modals/Gerente';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  

  constructor(private gerente: Gerente) {


  }
}
