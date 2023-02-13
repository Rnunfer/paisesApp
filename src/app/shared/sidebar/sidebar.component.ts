import { Component } from '@angular/core';
import { PaisService } from 'src/app/pais/services/pais.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent {

  constructor ( private paisService : PaisService) {}

  cambiarModoBusqueda(modo: string) {
    this.paisService.cambiarModoBusqueda(modo);
  }
}
