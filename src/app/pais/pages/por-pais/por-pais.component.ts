import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";

  constructor( private paisService: PaisService ) {
    this.paisService.reiniciar();
  };

  buscar() {
    this.paisService.buscarPais(this.termino, "name");
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
