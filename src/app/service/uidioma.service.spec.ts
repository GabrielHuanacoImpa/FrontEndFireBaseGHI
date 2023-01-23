import { TestBed } from '@angular/core/testing';

import { UidiomaService } from './uidioma.service';

describe('UidiomaService', () => {
  let service: UidiomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UidiomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
