import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraAPage } from './letra-a.page';

describe('LetraAPage', () => {
  let component: LetraAPage;
  let fixture: ComponentFixture<LetraAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
