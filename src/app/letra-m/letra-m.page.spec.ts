import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraMPage } from './letra-m.page';

describe('LetraMPage', () => {
  let component: LetraMPage;
  let fixture: ComponentFixture<LetraMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
