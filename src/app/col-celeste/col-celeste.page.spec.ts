import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColCelestePage } from './col-celeste.page';

describe('ColCelestePage', () => {
  let component: ColCelestePage;
  let fixture: ComponentFixture<ColCelestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColCelestePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColCelestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
