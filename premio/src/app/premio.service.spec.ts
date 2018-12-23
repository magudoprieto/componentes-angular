import { TestBed } from '@angular/core/testing';

import { PremioService } from './premio.service';

describe('PremioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PremioService = TestBed.get(PremioService);
    expect(service).toBeTruthy();
  });
});
