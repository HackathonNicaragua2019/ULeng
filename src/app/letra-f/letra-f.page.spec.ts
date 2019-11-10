import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraFPage } from './letra-f.page';

describe('LetraFPage', () => {
  let component: LetraFPage;
  let fixture: ComponentFixture<LetraFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraFPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
