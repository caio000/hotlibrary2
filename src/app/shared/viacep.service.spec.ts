import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Viacep } from './viacep';
import { ViacepService } from './viacep.service';

describe('ViacepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpModule ],
      providers: [ViacepService]
    });
  });

  it('should be created', inject([ViacepService], (service: ViacepService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a address when search a zipcode', inject([ViacepService], (service: ViacepService) => {
    service.getAddress('11665030').then(response => {
      const viacep = response;
      let address = new Viacep;
      address.cep = '11665-030';
      address.bairro = 'Indaiá';
      address.localidade = 'Caraguatatuba';
      address.uf = 'SP';
      address.logradouro = 'Avenida Rio Grande do Sul';

      expect(viacep.cep).toEqual(address.cep);
      expect(viacep.bairro).toEqual(address.bairro);
      expect(viacep.localidade).toEqual(address.localidade);
      expect(viacep.uf).toEqual(address.uf);
      expect(viacep.logradouro).toEqual(address.logradouro);
    });
  }));

});
