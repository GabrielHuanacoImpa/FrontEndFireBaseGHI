import { TestBed } from '@angular/core/testing';

import { UieService } from './uie.service';

describe('UieService', () => {
  let service: UieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
