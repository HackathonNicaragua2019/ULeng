import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraN1Page } from './letra-n1.page';

describe('LetraN1Page', () => {
  let component: LetraN1Page;
  let fixture: ComponentFixture<LetraN1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraN1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraN1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
