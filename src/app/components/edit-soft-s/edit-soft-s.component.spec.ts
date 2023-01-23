import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoftSComponent } from './edit-soft-s.component';

describe('EditSoftSComponent', () => {
  let component: EditSoftSComponent;
  let fixture: ComponentFixture<EditSoftSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSoftSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSoftSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
