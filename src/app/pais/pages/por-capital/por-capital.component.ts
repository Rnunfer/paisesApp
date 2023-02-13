import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";

  constructor( private paisService: PaisService) {
    this.paisService.reiniciar();
  };

  buscarPais() {
    this.paisService.buscarPais(this.termino, "capital");
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
