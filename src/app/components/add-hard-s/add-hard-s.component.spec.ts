import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHardSComponent } from './add-hard-s.component';

describe('AddHardSComponent', () => {
  let component: AddHardSComponent;
  let fixture: ComponentFixture<AddHardSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHardSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHardSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
