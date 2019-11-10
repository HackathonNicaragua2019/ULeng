import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num15Page } from './num15.page';

describe('Num15Page', () => {
  let component: Num15Page;
  let fixture: ComponentFixture<Num15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
