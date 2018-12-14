import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { States } from './States';

@Injectable()
export class StatesService {

  constructor(
    private http: Http
  ) { }

  public getStates(): Promise<States[]> {
    const url = `http://localhost:8080/states`;
    return this.http.get(url, {})
                    .toPromise()
                    .then(response => response.json() as States[])
                    .catch();
  }
}
