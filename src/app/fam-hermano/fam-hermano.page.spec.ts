import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamHermanoPage } from './fam-hermano.page';

describe('FamHermanoPage', () => {
  let component: FamHermanoPage;
  let fixture: ComponentFixture<FamHermanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamHermanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamHermanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
