import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepNuevasegPage } from './dep-nuevaseg.page';

describe('DepNuevasegPage', () => {
  let component: DepNuevasegPage;
  let fixture: ComponentFixture<DepNuevasegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepNuevasegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepNuevasegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
