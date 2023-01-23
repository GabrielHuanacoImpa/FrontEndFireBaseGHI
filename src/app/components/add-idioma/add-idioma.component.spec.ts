import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdiomaComponent } from './add-idioma.component';

describe('AddIdiomaComponent', () => {
  let component: AddIdiomaComponent;
  let fixture: ComponentFixture<AddIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
