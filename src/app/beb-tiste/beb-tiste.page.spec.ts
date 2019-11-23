import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebTistePage } from './beb-tiste.page';

describe('BebTistePage', () => {
  let component: BebTistePage;
  let fixture: ComponentFixture<BebTistePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebTistePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebTistePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
