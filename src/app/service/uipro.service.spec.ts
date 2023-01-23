import { TestBed } from '@angular/core/testing';

import { UiproService } from './uipro.service';

describe('UiproService', () => {
  let service: UiproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
