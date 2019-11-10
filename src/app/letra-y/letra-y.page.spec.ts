import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraYPage } from './letra-y.page';

describe('LetraYPage', () => {
  let component: LetraYPage;
  let fixture: ComponentFixture<LetraYPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraYPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraYPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
