import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebJengibrePage } from './beb-jengibre.page';

describe('BebJengibrePage', () => {
  let component: BebJengibrePage;
  let fixture: ComponentFixture<BebJengibrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebJengibrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebJengibrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
