import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamHijaPage } from './fam-hija.page';

describe('FamHijaPage', () => {
  let component: FamHijaPage;
  let fixture: ComponentFixture<FamHijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamHijaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamHijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
