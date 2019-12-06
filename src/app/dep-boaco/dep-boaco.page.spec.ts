import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepBoacoPage } from './dep-boaco.page';

describe('DepBoacoPage', () => {
  let component: DepBoacoPage;
  let fixture: ComponentFixture<DepBoacoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepBoacoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepBoacoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
