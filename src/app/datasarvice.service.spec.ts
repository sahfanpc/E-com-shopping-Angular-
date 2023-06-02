import { TestBed } from '@angular/core/testing';

import { DatasarviceService } from './datasarvice.service';

describe('DatasarviceService', () => {
  let service: DatasarviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasarviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
