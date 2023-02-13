import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  private _listaPaises: Country[] = [];
  private _errorbusqueda: boolean = false;
  private _terminoErroneo: string = "";

  constructor( private http: HttpClient ) {}

  buscarPais( termino: string, modoBusqueda: string) {

    const url = `${ this.apiUrl }/${modoBusqueda}/${ termino }`;

    this.http.get<Country[]>( url ).subscribe(
      (resp) => {
        this._listaPaises = resp;
        this._errorbusqueda = false;
      }, (err) => {
        this._errorbusqueda = true;
        this._listaPaises = [];
        this._terminoErroneo = termino;
      }
    );
  }

  reiniciar() {
    this._errorbusqueda = false;
    this._listaPaises = [];
  }

  get listaPaises(): Country[] {
    return [...this._listaPaises];
  }

  get errorBusqueda(): boolean {
    return this._errorbusqueda;
  }

  get terminoErroneo(): string {
    return this._terminoErroneo;
  }
}
