import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraIPage } from './letra-i.page';

describe('LetraIPage', () => {
  let component: LetraIPage;
  let fixture: ComponentFixture<LetraIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
