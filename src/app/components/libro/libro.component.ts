import { Component, OnInit } from '@angular/core';
import { Libro } from '../../modals/Libro';
import { LibroService } from '../../services/libro/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

	libros: Libro[];

  constructor(private service: LibroService) {  }

  ngOnInit() {
  	this.service.getLibro().subscribe(data => this.libros = data);
  }

}
