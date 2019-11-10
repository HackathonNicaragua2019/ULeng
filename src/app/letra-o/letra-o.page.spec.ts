import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraOPage } from './letra-o.page';

describe('LetraOPage', () => {
  let component: LetraOPage;
  let fixture: ComponentFixture<LetraOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraOPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
