import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalCompermisoPage } from './sal-compermiso.page';

describe('SalCompermisoPage', () => {
  let component: SalCompermisoPage;
  let fixture: ComponentFixture<SalCompermisoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalCompermisoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalCompermisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
