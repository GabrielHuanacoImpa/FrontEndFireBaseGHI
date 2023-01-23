import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasItemComponent } from './idiomas-item.component';

describe('IdiomasItemComponent', () => {
  let component: IdiomasItemComponent;
  let fixture: ComponentFixture<IdiomasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
