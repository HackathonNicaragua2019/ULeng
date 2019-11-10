import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraQPage } from './letra-q.page';

describe('LetraQPage', () => {
  let component: LetraQPage;
  let fixture: ComponentFixture<LetraQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraQPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
