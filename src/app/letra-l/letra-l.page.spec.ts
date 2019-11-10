import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraLPage } from './letra-l.page';

describe('LetraLPage', () => {
  let component: LetraLPage;
  let fixture: ComponentFixture<LetraLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraLPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
