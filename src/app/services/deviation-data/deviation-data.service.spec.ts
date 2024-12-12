import { TestBed } from '@angular/core/testing';

import { DeviationDataService } from './deviation-data.service';

describe('DeviationDataService', () => {
  let service: DeviationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
