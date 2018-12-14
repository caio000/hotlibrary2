import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';

import { StatesService } from './states.service';

import { States } from './states';

describe('StatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpModule ],
      providers: [ StatesService ]
    });
  });

  it('should be created', inject([StatesService], (service: StatesService) => {
    expect(service).toBeTruthy();
  }));

  it('getStates must return a array of States', inject([StatesService], (service: StatesService) => {
    let states: Array<States>;
    service.getStates().then(response => {
      states = response
      expect(states.length).toBeGreaterThan(0);
    });
  }));
});
