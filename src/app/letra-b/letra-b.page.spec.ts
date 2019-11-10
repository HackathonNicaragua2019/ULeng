import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraBPage } from './letra-b.page';

describe('LetraBPage', () => {
  let component: LetraBPage;
  let fixture: ComponentFixture<LetraBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
