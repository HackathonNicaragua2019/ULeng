import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraNPage } from './letra-n.page';

describe('LetraNPage', () => {
  let component: LetraNPage;
  let fixture: ComponentFixture<LetraNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
