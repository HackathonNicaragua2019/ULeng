import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColVerdePage } from './col-verde.page';

describe('ColVerdePage', () => {
  let component: ColVerdePage;
  let fixture: ComponentFixture<ColVerdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColVerdePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColVerdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
