import { TestBed } from '@angular/core/testing';

import { UieduService } from './uiedu.service';

describe('UieduService', () => {
  let service: UieduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UieduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
