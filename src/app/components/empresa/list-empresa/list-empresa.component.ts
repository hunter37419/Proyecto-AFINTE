import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/model/empresa';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styles: []
})
export class ListEmpresaComponent implements OnInit {

  empresas: Empresa[];

  constructor(private router: Router, private service: EmpresaService) {}

  ngOnInit() {
    console.log(this.empresas);
    this.service.getEmpresas().subscribe(data => (this.empresas = data));
  }

  deleteEmpresa(empresa: Empresa): void {
        this.service.deleteEmpresa(empresa.id).subscribe(data => {
          this.empresas = this.empresas.filter(c => c !== empresa);
        });
  }

  editEmpresa(empresa: Empresa): void {
    localStorage.removeItem('editEmpresaId');
    localStorage.setItem('editEmpresaId', empresa.id.toString());
    this.router.navigate(['edit-empresa']);
  }

  addEmpresa(): void {
    this.router.navigate(['add-empresa']);
  }
}
