import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent{

  constructor( private paisService: PaisService ) {};

  get listaPaises() {
    return this.paisService.listaPaises;
  }

  cambiarModoBusqueda(modo: string) {
    this.paisService.cambiarModoBusqueda(modo);
  }
}
