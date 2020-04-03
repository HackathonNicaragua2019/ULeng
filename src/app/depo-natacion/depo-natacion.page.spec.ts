import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoNatacionPage } from './depo-natacion.page';

describe('DepoNatacionPage', () => {
  let component: DepoNatacionPage;
  let fixture: ComponentFixture<DepoNatacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoNatacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoNatacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
