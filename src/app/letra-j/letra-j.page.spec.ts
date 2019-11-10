import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraJPage } from './letra-j.page';

describe('LetraJPage', () => {
  let component: LetraJPage;
  let fixture: ComponentFixture<LetraJPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraJPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraJPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
