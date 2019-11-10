import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraPPage } from './letra-p.page';

describe('LetraPPage', () => {
  let component: LetraPPage;
  let fixture: ComponentFixture<LetraPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
