import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraCPage } from './letra-c.page';

describe('LetraCPage', () => {
  let component: LetraCPage;
  let fixture: ComponentFixture<LetraCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
