import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino: string = "";

  constructor( private paisService: PaisService) {
    this.paisService.reiniciar();
  };

  buscarPais() {
    this.paisService.buscarPais(this.termino, "region");
  }

  get listaPaises() {
    return this.paisService.listaPaises;
  }

  get errorBusqueda() {
    return this.paisService.errorBusqueda;
  }

  get terminoErroneo() {
    return this.paisService.terminoErroneo;
  }
}
