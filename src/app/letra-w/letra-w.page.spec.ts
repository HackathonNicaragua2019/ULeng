import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraWPage } from './letra-w.page';

describe('LetraWPage', () => {
  let component: LetraWPage;
  let fixture: ComponentFixture<LetraWPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraWPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraWPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
