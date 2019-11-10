import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraRPage } from './letra-r.page';

describe('LetraRPage', () => {
  let component: LetraRPage;
  let fixture: ComponentFixture<LetraRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
