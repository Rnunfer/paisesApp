import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais: Country | any;

  constructor( private paisService: PaisService) {
    this.paisService.buscarPais("pe", "alpha");
    this.pais = this.listaPaises.pop();
  }

  get listaPaises() {
    return this.paisService.listaPaises;
  }
}
