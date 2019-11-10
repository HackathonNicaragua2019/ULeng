import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num14Page } from './num14.page';

describe('Num14Page', () => {
  let component: Num14Page;
  let fixture: ComponentFixture<Num14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
