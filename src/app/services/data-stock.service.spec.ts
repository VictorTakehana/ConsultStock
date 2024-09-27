import { TestBed } from '@angular/core/testing';

import { DataStockService } from './data-stock.service';

describe('DataStockService', () => {
  let service: DataStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
