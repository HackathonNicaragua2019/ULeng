import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraRrPage } from './letra-rr.page';

describe('LetraRrPage', () => {
  let component: LetraRrPage;
  let fixture: ComponentFixture<LetraRrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraRrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraRrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
