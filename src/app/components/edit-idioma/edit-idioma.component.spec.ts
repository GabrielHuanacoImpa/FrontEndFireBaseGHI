import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIdiomaComponent } from './edit-idioma.component';

describe('EditIdiomaComponent', () => {
  let component: EditIdiomaComponent;
  let fixture: ComponentFixture<EditIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
