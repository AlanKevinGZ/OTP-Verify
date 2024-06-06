import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionVerifyGuard } from './session-verify.guard';

describe('sessionVerifyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sessionVerifyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
