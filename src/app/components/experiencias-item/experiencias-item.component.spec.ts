import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasItemComponent } from './experiencias-item.component';

describe('ExperienciasItemComponent', () => {
  let component: ExperienciasItemComponent;
  let fixture: ComponentFixture<ExperienciasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
