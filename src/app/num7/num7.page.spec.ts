import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num7Page } from './num7.page';

describe('Num7Page', () => {
  let component: Num7Page;
  let fixture: ComponentFixture<Num7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
