import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionesItemComponent } from './educaciones-item.component';

describe('EducacionesItemComponent', () => {
  let component: EducacionesItemComponent;
  let fixture: ComponentFixture<EducacionesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
