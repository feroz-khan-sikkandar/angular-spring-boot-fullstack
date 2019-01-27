import { TestBed } from '@angular/core/testing';

import { HadrcodedAuthenticationService } from './hadrcoded-authentication.service';

describe('HadrcodedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HadrcodedAuthenticationService = TestBed.get(HadrcodedAuthenticationService);
    expect(service).toBeTruthy();
  });
});
