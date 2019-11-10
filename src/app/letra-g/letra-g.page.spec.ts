import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraGPage } from './letra-g.page';

describe('LetraGPage', () => {
  let component: LetraGPage;
  let fixture: ComponentFixture<LetraGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraGPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
