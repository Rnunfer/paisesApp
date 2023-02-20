import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  private _listaPaises: Country[] = JSON.parse(localStorage.getItem("listaPaises")!) || [];
  private _modoBusqueda: string = "";
  private _errorBusqueda: boolean = false;

  constructor( private http: HttpClient ) {}

  buscarPais( termino: string ) {

    const url = `${ this.apiUrl }/${ this._modoBusqueda }/${ termino }`;

    this.http.get<Country[]>( url ).subscribe(
      (resp) => { this._errorBusqueda = false; this._listaPaises = resp; localStorage.setItem("listaPaises", JSON.stringify(this._listaPaises))},
      (err) => { this._errorBusqueda = true; this._listaPaises = []}
    )

  }

  buscarPaisUno( id: string) {

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  cambiarModoBusqueda(modo: string) {
    this._modoBusqueda = modo;
  }

  get listaPaises(): Country[] {
    return this._listaPaises;
  }

  get errorBusqueda(): boolean {
    return this._errorBusqueda;
  }
}
