import { TestBed } from '@angular/core/testing';

import { UiHardSkillService } from './ui-hard-skill.service';

describe('UiHardSkillService', () => {
  let service: UiHardSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHardSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
