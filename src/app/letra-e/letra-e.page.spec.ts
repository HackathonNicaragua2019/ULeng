import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraEPage } from './letra-e.page';

describe('LetraEPage', () => {
  let component: LetraEPage;
  let fixture: ComponentFixture<LetraEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
