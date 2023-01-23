import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsItemComponent } from './soft-skills-item.component';

describe('SoftSkillsItemComponent', () => {
  let component: SoftSkillsItemComponent;
  let fixture: ComponentFixture<SoftSkillsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
