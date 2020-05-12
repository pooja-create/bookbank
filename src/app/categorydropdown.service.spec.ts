import { TestBed } from '@angular/core/testing';

import { CategorydropdownService } from './categorydropdown.service';

describe('CategorydropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorydropdownService = TestBed.get(CategorydropdownService);
    expect(service).toBeTruthy();
  });
});
