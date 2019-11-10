import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraChPage } from './letra-ch.page';

describe('LetraChPage', () => {
  let component: LetraChPage;
  let fixture: ComponentFixture<LetraChPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraChPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraChPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
