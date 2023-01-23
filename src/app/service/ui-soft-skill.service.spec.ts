import { TestBed } from '@angular/core/testing';

import { UiSoftSkillService } from './ui-soft-skill.service';

describe('UiSoftSkillService', () => {
  let service: UiSoftSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSoftSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
