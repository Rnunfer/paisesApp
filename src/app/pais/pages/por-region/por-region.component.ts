import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit{

  termino: string = "";

  constructor( private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.cambiarModoBusqueda("region");
  }
;

  get listaPaises() {
    return this.paisService.listaPaises;
  }

}
