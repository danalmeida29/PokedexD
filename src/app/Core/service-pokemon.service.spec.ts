import { TestBed } from '@angular/core/testing';

import { ServicePokemonService } from './service-pokemon.service';

describe('ServicePokemonService', () => {
  let service: ServicePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
