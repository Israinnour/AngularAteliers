import { TestBed } from '@angular/core/testing';

import { InvoceServiceService } from './invoce-service.service';

describe('InvoceServiceService', () => {
  let service: InvoceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
