import { Component, OnInit } from '@angular/core';
import { RouterPreloader } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styles: [
  ]
})
export class BarraBusquedaComponent implements OnInit{

  termino: string = "";
  terminoErroneo: string = "";

  constructor( private paisService : PaisService ) {}

  ngOnInit(): void {
    this.terminoErroneo = "";
  }

  buscarPais() {
    this.paisService.buscarPais(this.termino)
    if (this.errorBusqueda) {
      this.terminoErroneo = ""
    } else {
      this.terminoErroneo = this.termino
    }
    console.log(this.terminoErroneo)
  }

  get errorBusqueda() {
    return this.paisService.errorBusqueda;
  }

}
