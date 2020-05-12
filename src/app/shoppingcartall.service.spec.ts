import { TestBed } from '@angular/core/testing';

import { ShoppingcartallService } from './shoppingcartall.service';

describe('ShoppingcartallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingcartallService = TestBed.get(ShoppingcartallService);
    expect(service).toBeTruthy();
  });
});
