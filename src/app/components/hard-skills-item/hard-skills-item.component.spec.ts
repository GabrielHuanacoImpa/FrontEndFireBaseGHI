import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillsItemComponent } from './hard-skills-item.component';

describe('HardSkillsItemComponent', () => {
  let component: HardSkillsItemComponent;
  let fixture: ComponentFixture<HardSkillsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
