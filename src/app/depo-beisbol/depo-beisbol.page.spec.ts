import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoBeisbolPage } from './depo-beisbol.page';

describe('DepoBeisbolPage', () => {
  let component: DepoBeisbolPage;
  let fixture: ComponentFixture<DepoBeisbolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoBeisbolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoBeisbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
