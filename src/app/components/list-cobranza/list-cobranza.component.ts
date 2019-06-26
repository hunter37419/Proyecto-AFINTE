import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cobranza } from 'src/app/modals/cobranza';
import { CobranzaService } from '../../services/cobranza.service';

@Component({
  selector: 'app-list-cobranza',
  templateUrl: './list-cobranza.component.html',
  styleUrls: ['./list-cobranza.component.css'],
  styles: []
})
export class ListCobranzaComponent implements OnInit {

  cobranzas: Cobranza[];

  constructor(private router: Router, private service: CobranzaService) {}

  ngOnInit() {
    console.log(this.cobranzas);
    this.service.getCobranzas().subscribe(data => (this.cobranzas = data));
  }

  deletecobranza(cobranza: Cobranza): void {
        this.service.deleteCobranza(cobranza.llave).subscribe(data => {
          this.cobranzas = this.cobranzas.filter(c => c !== cobranza);
        });
  }

  editcobranza(cobranza: Cobranza): void {
    localStorage.removeItem('editcobranzaId');
    localStorage.setItem('editcobranzaId', cobranza.llave.toString());
    this.router.navigate(['edit-cobranza']);
  }
}
