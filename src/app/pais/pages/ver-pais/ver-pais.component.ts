import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Country, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  paisAMostrar!: Country;
  Object: any;

  constructor( private paisService: PaisService, private activatedRoute : ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( (param) => this.paisService.buscarPaisUno( param['id'] ) ),
      tap(console.log)
    )
    .subscribe( pais => this.paisAMostrar = pais.pop(),
      error => this.router.navigate(['']))
  }
}
