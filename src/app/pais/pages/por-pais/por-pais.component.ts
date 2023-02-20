import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  constructor( private paisService: PaisService ) {}

  ngOnInit(): void {
    this.paisService.cambiarModoBusqueda("name");
  }

  get listaPaises() {
    return this.paisService.listaPaises;
  }
}
