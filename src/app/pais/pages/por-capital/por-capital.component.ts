import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit{

  termino: string = "";

  constructor( private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.cambiarModoBusqueda("capital");
  }

  get listaPaises() {
    return this.paisService.listaPaises;
  }

}
