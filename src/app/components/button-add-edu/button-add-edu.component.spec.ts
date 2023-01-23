import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddEduComponent } from './button-add-edu.component';

describe('ButtonAddEduComponent', () => {
  let component: ButtonAddEduComponent;
  let fixture: ComponentFixture<ButtonAddEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
