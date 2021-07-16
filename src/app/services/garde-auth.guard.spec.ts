import { TestBed } from '@angular/core/testing';

import { GardeConnexionGuard } from './garde-auth.guard';

describe('GardeAuthGuard', () => {
  let guard: GardeConnexionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardeConnexionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
