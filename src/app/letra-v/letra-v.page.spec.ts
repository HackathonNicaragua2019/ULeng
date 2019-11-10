import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraVPage } from './letra-v.page';

describe('LetraVPage', () => {
  let component: LetraVPage;
  let fixture: ComponentFixture<LetraVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraVPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
