import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoTenisPage } from './depo-tenis.page';

describe('DepoTenisPage', () => {
  let component: DepoTenisPage;
  let fixture: ComponentFixture<DepoTenisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoTenisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoTenisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
