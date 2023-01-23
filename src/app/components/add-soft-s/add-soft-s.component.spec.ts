import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoftSComponent } from './add-soft-s.component';

describe('AddSoftSComponent', () => {
  let component: AddSoftSComponent;
  let fixture: ComponentFixture<AddSoftSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoftSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSoftSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
