import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardSComponent } from './edit-hard-s.component';

describe('EditHardSComponent', () => {
  let component: EditHardSComponent;
  let fixture: ComponentFixture<EditHardSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
