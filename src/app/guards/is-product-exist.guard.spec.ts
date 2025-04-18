import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isProductExistGuard } from './is-product-exist.guard';

describe('isProductExistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isProductExistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
