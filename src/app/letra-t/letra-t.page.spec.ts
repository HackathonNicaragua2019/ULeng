import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraTPage } from './letra-t.page';

describe('LetraTPage', () => {
  let component: LetraTPage;
  let fixture: ComponentFixture<LetraTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
