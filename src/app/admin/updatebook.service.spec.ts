import { TestBed } from '@angular/core/testing';

import { UpdatebookService } from './updatebook.service';

describe('UpdatebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatebookService = TestBed.get(UpdatebookService);
    expect(service).toBeTruthy();
  });
});
