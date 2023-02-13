import { Component } from '@angular/core';
import { RouterPreloader } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styles: [
  ]
})
export class BarraBusquedaComponent {

  termino: string = "";

  constructor( private paisService : PaisService ) {}

  buscarPais() {
    this.paisService.buscarPais(this.termino);
  }

  get terminoErroneo() {
    return this.paisService.terminoErroneo;
  }

  get errorBusqueda() {
    return this.paisService.errorBusqueda;
  }

}
