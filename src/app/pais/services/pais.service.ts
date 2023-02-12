import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2/";
  private _listaPaises: Country[] = [];
  private _errorbusqueda: boolean = false;

  constructor( private http: HttpClient ) {}

  buscarPais( termino: string ) {

    const url = `${ this.apiUrl }/name/${ termino }`;

    this.http.get<Country[]>( url ).subscribe(
      (resp) => {
        this._listaPaises = resp;
        this._errorbusqueda = false;
      }, (err) => {
        this._errorbusqueda = true;
        this._listaPaises = [];
      }
    );
  }

  get listaPaises(): Country[] {
    return [...this._listaPaises];
  }

  get errorBusqueda(): boolean {
    return this._errorbusqueda;
  }
}
