import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEduComponent } from './modal-edit-edu.component';

describe('ModalEditEduComponent', () => {
  let component: ModalEditEduComponent;
  let fixture: ComponentFixture<ModalEditEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
