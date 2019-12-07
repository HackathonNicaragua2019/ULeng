import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColNaranjaPage } from './col-naranja.page';

describe('ColNaranjaPage', () => {
  let component: ColNaranjaPage;
  let fixture: ComponentFixture<ColNaranjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColNaranjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColNaranjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
