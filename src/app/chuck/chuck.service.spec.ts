import { TestBed } from '@angular/core/testing';

import { ChuckService } from './chuck.service';

describe('ChuckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckService = TestBed.get(ChuckService);
    expect(service).toBeTruthy();
  });
});
