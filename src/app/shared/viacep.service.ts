import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Viacep } from './viacep';

@Injectable()
export class ViacepService {

  private headers: Headers;
  private viacepURL: string;

  constructor(
    private http: Http
  ) {
    this.viacepURL = 'https://viacep.com.br/ws';
    this.headers = new Headers({'Content-type': 'application/json'});
  }

  getAddress(cep: string): Promise<Viacep> {
    const url = `${ this.viacepURL }/${ cep }/json`;
    return this.http.get(url, { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Viacep);
  }
}
