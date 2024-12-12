import { TestBed } from '@angular/core/testing';

import { ChartsJsService } from './charts-js.service';

describe('ChartsJsService', () => {
  let service: ChartsJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
