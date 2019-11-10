import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraDPage } from './letra-d.page';

describe('LetraDPage', () => {
  let component: LetraDPage;
  let fixture: ComponentFixture<LetraDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
