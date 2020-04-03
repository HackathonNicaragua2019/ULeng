import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoFutbolPage } from './depo-futbol.page';

describe('DepoFutbolPage', () => {
  let component: DepoFutbolPage;
  let fixture: ComponentFixture<DepoFutbolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoFutbolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
