import { TestBed } from '@angular/core/testing';

import { AISUSStatusService } from './aisus-status.service';

describe('AISUSStatusService', () => {
  let service: AISUSStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AISUSStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
