import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraSPage } from './letra-s.page';

describe('LetraSPage', () => {
  let component: LetraSPage;
  let fixture: ComponentFixture<LetraSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
