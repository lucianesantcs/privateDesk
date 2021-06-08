import { TestBed } from '@angular/core/testing';

import { FinancesService } from './finances.service';

describe('FinancesService', () => {
  let service: FinancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
